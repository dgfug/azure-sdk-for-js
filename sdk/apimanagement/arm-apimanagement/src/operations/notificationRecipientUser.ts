/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { NotificationRecipientUser } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";
import {
  NotificationName,
  NotificationRecipientUserListByNotificationOptionalParams,
  NotificationRecipientUserListByNotificationResponse,
  NotificationRecipientUserCheckEntityExistsOptionalParams,
  NotificationRecipientUserCheckEntityExistsResponse,
  NotificationRecipientUserCreateOrUpdateOptionalParams,
  NotificationRecipientUserCreateOrUpdateResponse,
  NotificationRecipientUserDeleteOptionalParams
} from "../models";

/** Class containing NotificationRecipientUser operations. */
export class NotificationRecipientUserImpl
  implements NotificationRecipientUser {
  private readonly client: ApiManagementClientContext;

  /**
   * Initialize a new instance of the class NotificationRecipientUser class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of the Notification Recipient User subscribed to the notification.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param options The options parameters.
   */
  listByNotification(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    options?: NotificationRecipientUserListByNotificationOptionalParams
  ): Promise<NotificationRecipientUserListByNotificationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, notificationName, options },
      listByNotificationOperationSpec
    );
  }

  /**
   * Determine if the Notification Recipient User is subscribed to the notification.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    userId: string,
    options?: NotificationRecipientUserCheckEntityExistsOptionalParams
  ): Promise<NotificationRecipientUserCheckEntityExistsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, notificationName, userId, options },
      checkEntityExistsOperationSpec
    );
  }

  /**
   * Adds the API Management User to the list of Recipients for the Notification.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    userId: string,
    options?: NotificationRecipientUserCreateOrUpdateOptionalParams
  ): Promise<NotificationRecipientUserCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, notificationName, userId, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Removes the API Management user from the list of Notification.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    notificationName: NotificationName,
    userId: string,
    options?: NotificationRecipientUserDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, notificationName, userId, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByNotificationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/notifications/{notificationName}/recipientUsers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecipientUserCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.notificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkEntityExistsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/notifications/{notificationName}/recipientUsers/{userId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.userId,
    Parameters.notificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/notifications/{notificationName}/recipientUsers/{userId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RecipientUserContract
    },
    201: {
      bodyMapper: Mappers.RecipientUserContract
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.userId,
    Parameters.notificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/notifications/{notificationName}/recipientUsers/{userId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.userId,
    Parameters.notificationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
