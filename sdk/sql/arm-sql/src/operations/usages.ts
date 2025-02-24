/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  Usage,
  UsagesListByInstancePoolNextOptionalParams,
  UsagesListByInstancePoolOptionalParams,
  UsagesListByInstancePoolResponse,
  UsagesListByInstancePoolNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Usages operations. */
export class UsagesImpl implements Usages {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all instance pool usage metrics
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  public listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listByInstancePoolPagingAll(
      resourceGroupName,
      instancePoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByInstancePoolPagingPage(
          resourceGroupName,
          instancePoolName,
          options
        );
      }
    };
  }

  private async *listByInstancePoolPagingPage(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listByInstancePool(
      resourceGroupName,
      instancePoolName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByInstancePoolNext(
        resourceGroupName,
        instancePoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByInstancePoolPagingAll(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listByInstancePoolPagingPage(
      resourceGroupName,
      instancePoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all instance pool usage metrics
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param options The options parameters.
   */
  private _listByInstancePool(
    resourceGroupName: string,
    instancePoolName: string,
    options?: UsagesListByInstancePoolOptionalParams
  ): Promise<UsagesListByInstancePoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, options },
      listByInstancePoolOperationSpec
    );
  }

  /**
   * ListByInstancePoolNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param instancePoolName The name of the instance pool to be retrieved.
   * @param nextLink The nextLink from the previous successful call to the ListByInstancePool method.
   * @param options The options parameters.
   */
  private _listByInstancePoolNext(
    resourceGroupName: string,
    instancePoolName: string,
    nextLink: string,
    options?: UsagesListByInstancePoolNextOptionalParams
  ): Promise<UsagesListByInstancePoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, instancePoolName, nextLink, options },
      listByInstancePoolNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByInstancePoolOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1, Parameters.expandChildren],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByInstancePoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1, Parameters.expandChildren],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.instancePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
