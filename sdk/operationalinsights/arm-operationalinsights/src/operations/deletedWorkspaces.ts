/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeletedWorkspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClientContext } from "../operationalInsightsManagementClientContext";
import {
  Workspace,
  DeletedWorkspacesListOptionalParams,
  DeletedWorkspacesListByResourceGroupOptionalParams,
  DeletedWorkspacesListResponse,
  DeletedWorkspacesListByResourceGroupResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedWorkspaces operations. */
export class DeletedWorkspacesImpl implements DeletedWorkspaces {
  private readonly client: OperationalInsightsManagementClientContext;

  /**
   * Initialize a new instance of the class DeletedWorkspaces class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets recently deleted workspaces in a subscription, available for recovery.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedWorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: DeletedWorkspacesListOptionalParams
  ): AsyncIterableIterator<Workspace[]> {
    let result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: DeletedWorkspacesListOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets recently deleted workspaces in a resource group, available for recovery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DeletedWorkspacesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Workspace> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DeletedWorkspacesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workspace[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DeletedWorkspacesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Workspace> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets recently deleted workspaces in a subscription, available for recovery.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedWorkspacesListOptionalParams
  ): Promise<DeletedWorkspacesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets recently deleted workspaces in a resource group, available for recovery.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DeletedWorkspacesListByResourceGroupOptionalParams
  ): Promise<DeletedWorkspacesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OperationalInsights/deletedWorkspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/deletedWorkspaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
