// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * @summary Shows a simple bulk call with each BulkOperation type.
 */

import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.resolve(__dirname, "../sample.env") });

import { handleError, finish, logStep } from "./Shared/handleError";
import { BulkOperationType, CosmosClient } from "@azure/cosmos";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
function addEntropy(name: string): string {
  return name + getEntropy();
}

function getEntropy(): string {
  return `${Math.floor(Math.random() * 10000)}`;
}

async function run() {
  const containerId = "bulkContainerV2";
  const client = new CosmosClient({
    key: key,
    endpoint: endpoint
  });
  const { database } = await client.databases.create({ id: addEntropy("bulk db") });
  logStep(`Create multi-partition container '${containerId}' with partition key /key`);
  const { container: v2Container } = await database.containers.create({
    id: containerId,
    partitionKey: {
      paths: ["/key"],
      version: 2
    },
    throughput: 25100
  });

  const readItemId = addEntropy("item1");
  const deleteItemId = addEntropy("item2");
  const replaceItemId = addEntropy("item3");
  logStep(
    `Create items ${readItemId}, ${deleteItemId}, ${replaceItemId} for reading, deleting and replacing`
  );
  await v2Container.items.create({
    id: readItemId,
    key: true,
    class: "2010"
  });
  await v2Container.items.create({
    id: deleteItemId,
    key: {},
    class: "2011"
  });
  await v2Container.items.create({
    id: replaceItemId,
    key: 5,
    class: "2012"
  });

  const operations = [
    {
      operationType: BulkOperationType.Create,
      partitionKey: "A",
      resourceBody: { id: addEntropy("doc1"), name: "sample", key: "A" }
    },
    {
      operationType: BulkOperationType.Upsert,
      partitionKey: "U",
      resourceBody: { name: "other", key: "U" }
    },
    {
      operationType: BulkOperationType.Read,
      id: readItemId,
      partitionKey: true
    },
    {
      operationType: BulkOperationType.Delete,
      id: deleteItemId,
      partitionKey: {}
    },
    {
      operationType: BulkOperationType.Replace,
      partitionKey: 5,
      id: replaceItemId,
      resourceBody: { id: replaceItemId, name: "nice", key: 5 }
    }
  ];
  logStep(`Execute a simple bulk request with 5 operations: Create, Upsert, Read, Delete, Replace`);
  logStep("Bulk Operations Input to 'container.items.bulk(operations):'");
  console.log(operations);
  const response = await v2Container.items.bulk(operations);
  logStep("Bulk response:");
  console.log(response);
  await finish();
}

run().catch(handleError);
