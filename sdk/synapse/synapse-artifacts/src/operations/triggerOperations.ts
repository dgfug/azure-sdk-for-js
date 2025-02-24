/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TriggerOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClientContext } from "../artifactsClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  TriggerResource,
  TriggerGetTriggersByWorkspaceNextOptionalParams,
  TriggerGetTriggersByWorkspaceOptionalParams,
  TriggerGetTriggersByWorkspaceResponse,
  TriggerCreateOrUpdateTriggerOptionalParams,
  TriggerCreateOrUpdateTriggerResponse,
  TriggerGetTriggerOptionalParams,
  TriggerGetTriggerResponse,
  TriggerDeleteTriggerOptionalParams,
  TriggerSubscribeTriggerToEventsOptionalParams,
  TriggerSubscribeTriggerToEventsResponse,
  TriggerGetEventSubscriptionStatusOptionalParams,
  TriggerGetEventSubscriptionStatusResponse,
  TriggerUnsubscribeTriggerFromEventsOptionalParams,
  TriggerUnsubscribeTriggerFromEventsResponse,
  TriggerStartTriggerOptionalParams,
  TriggerStopTriggerOptionalParams,
  TriggerGetTriggersByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TriggerOperations operations. */
export class TriggerOperationsImpl implements TriggerOperations {
  private readonly client: ArtifactsClientContext;

  /**
   * Initialize a new instance of the class TriggerOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClientContext) {
    this.client = client;
  }

  /**
   * Lists triggers.
   * @param options The options parameters.
   */
  public listTriggersByWorkspace(
    options?: TriggerGetTriggersByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<TriggerResource> {
    const iter = this.getTriggersByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getTriggersByWorkspacePagingPage(options);
      }
    };
  }

  private async *getTriggersByWorkspacePagingPage(
    options?: TriggerGetTriggersByWorkspaceOptionalParams
  ): AsyncIterableIterator<TriggerResource[]> {
    let result = await this._getTriggersByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getTriggersByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getTriggersByWorkspacePagingAll(
    options?: TriggerGetTriggersByWorkspaceOptionalParams
  ): AsyncIterableIterator<TriggerResource> {
    for await (const page of this.getTriggersByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists triggers.
   * @param options The options parameters.
   */
  private async _getTriggersByWorkspace(
    options?: TriggerGetTriggersByWorkspaceOptionalParams
  ): Promise<TriggerGetTriggersByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getTriggersByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        getTriggersByWorkspaceOperationSpec
      );
      return result as TriggerGetTriggersByWorkspaceResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a trigger.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateTrigger(
    triggerName: string,
    trigger: TriggerResource,
    options?: TriggerCreateOrUpdateTriggerOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggerCreateOrUpdateTriggerResponse>,
      TriggerCreateOrUpdateTriggerResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdateTrigger",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggerCreateOrUpdateTriggerResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as TriggerCreateOrUpdateTriggerResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, trigger, options },
      createOrUpdateTriggerOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates or updates a trigger.
   * @param triggerName The trigger name.
   * @param trigger Trigger resource definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateTriggerAndWait(
    triggerName: string,
    trigger: TriggerResource,
    options?: TriggerCreateOrUpdateTriggerOptionalParams
  ): Promise<TriggerCreateOrUpdateTriggerResponse> {
    const poller = await this.beginCreateOrUpdateTrigger(
      triggerName,
      trigger,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async getTrigger(
    triggerName: string,
    options?: TriggerGetTriggerOptionalParams
  ): Promise<TriggerGetTriggerResponse> {
    const { span } = createSpan("ArtifactsClient-getTrigger", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { triggerName, options },
        getTriggerOperationSpec
      );
      return result as TriggerGetTriggerResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Deletes a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginDeleteTrigger(
    triggerName: string,
    options?: TriggerDeleteTriggerOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteTrigger",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, options },
      deleteTriggerOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginDeleteTriggerAndWait(
    triggerName: string,
    options?: TriggerDeleteTriggerOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteTrigger(triggerName, options);
    return poller.pollUntilDone();
  }

  /**
   * Subscribe event trigger to events.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginSubscribeTriggerToEvents(
    triggerName: string,
    options?: TriggerSubscribeTriggerToEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggerSubscribeTriggerToEventsResponse>,
      TriggerSubscribeTriggerToEventsResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginSubscribeTriggerToEvents",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggerSubscribeTriggerToEventsResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as TriggerSubscribeTriggerToEventsResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, options },
      subscribeTriggerToEventsOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Subscribe event trigger to events.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginSubscribeTriggerToEventsAndWait(
    triggerName: string,
    options?: TriggerSubscribeTriggerToEventsOptionalParams
  ): Promise<TriggerSubscribeTriggerToEventsResponse> {
    const poller = await this.beginSubscribeTriggerToEvents(
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a trigger's event subscription status.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async getEventSubscriptionStatus(
    triggerName: string,
    options?: TriggerGetEventSubscriptionStatusOptionalParams
  ): Promise<TriggerGetEventSubscriptionStatusResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getEventSubscriptionStatus",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { triggerName, options },
        getEventSubscriptionStatusOperationSpec
      );
      return result as TriggerGetEventSubscriptionStatusResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Unsubscribe event trigger from events.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginUnsubscribeTriggerFromEvents(
    triggerName: string,
    options?: TriggerUnsubscribeTriggerFromEventsOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<TriggerUnsubscribeTriggerFromEventsResponse>,
      TriggerUnsubscribeTriggerFromEventsResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginUnsubscribeTriggerFromEvents",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<TriggerUnsubscribeTriggerFromEventsResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as TriggerUnsubscribeTriggerFromEventsResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, options },
      unsubscribeTriggerFromEventsOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Unsubscribe event trigger from events.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginUnsubscribeTriggerFromEventsAndWait(
    triggerName: string,
    options?: TriggerUnsubscribeTriggerFromEventsOptionalParams
  ): Promise<TriggerUnsubscribeTriggerFromEventsResponse> {
    const poller = await this.beginUnsubscribeTriggerFromEvents(
      triggerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Starts a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStartTrigger(
    triggerName: string,
    options?: TriggerStartTriggerOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginStartTrigger",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, options },
      startTriggerOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Starts a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStartTriggerAndWait(
    triggerName: string,
    options?: TriggerStartTriggerOptionalParams
  ): Promise<void> {
    const poller = await this.beginStartTrigger(triggerName, options);
    return poller.pollUntilDone();
  }

  /**
   * Stops a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStopTrigger(
    triggerName: string,
    options?: TriggerStopTriggerOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginStopTrigger",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { triggerName, options },
      stopTriggerOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Stops a trigger.
   * @param triggerName The trigger name.
   * @param options The options parameters.
   */
  async beginStopTriggerAndWait(
    triggerName: string,
    options?: TriggerStopTriggerOptionalParams
  ): Promise<void> {
    const poller = await this.beginStopTrigger(triggerName, options);
    return poller.pollUntilDone();
  }

  /**
   * GetTriggersByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the GetTriggersByWorkspace method.
   * @param options The options parameters.
   */
  private async _getTriggersByWorkspaceNext(
    nextLink: string,
    options?: TriggerGetTriggersByWorkspaceNextOptionalParams
  ): Promise<TriggerGetTriggersByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_getTriggersByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        getTriggersByWorkspaceNextOperationSpec
      );
      return result as TriggerGetTriggersByWorkspaceNextResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getTriggersByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/triggers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    201: {
      bodyMapper: Mappers.TriggerResource
    },
    202: {
      bodyMapper: Mappers.TriggerResource
    },
    204: {
      bodyMapper: Mappers.TriggerResource
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.trigger,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const getTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerResource
    },
    304: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const deleteTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const subscribeTriggerToEventsOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/subscribeToEvents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    201: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    204: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const getEventSubscriptionStatusOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/getEventSubscriptionStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const unsubscribeTriggerFromEventsOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/unsubscribeFromEvents",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    201: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    202: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    204: {
      bodyMapper: Mappers.TriggerSubscriptionOperationStatus
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const startTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const stopTriggerOperationSpec: coreClient.OperationSpec = {
  path: "/triggers/{triggerName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.triggerName],
  headerParameters: [Parameters.accept],
  serializer
};
const getTriggersByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TriggerListResponse
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
