## API Report File for "@azure/arm-notificationhubs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type AccessRights = "Manage" | "Send" | "Listen";

// @public
export interface AdmCredential {
    authTokenUrl?: string;
    clientId?: string;
    clientSecret?: string;
}

// @public
export interface ApnsCredential {
    apnsCertificate?: string;
    appId?: string;
    appName?: string;
    certificateKey?: string;
    endpoint?: string;
    keyId?: string;
    thumbprint?: string;
    token?: string;
}

// @public
export interface BaiduCredential {
    baiduApiKey?: string;
    baiduEndPoint?: string;
    baiduSecretKey?: string;
}

// @public
export interface CheckAvailabilityParameters {
    readonly id?: string;
    isAvailiable?: boolean;
    location?: string;
    name: string;
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export type CheckAvailabilityResult = Resource & {
    isAvailiable?: boolean;
};

// @public
export type DebugSendResponse = Resource & {
    success?: number;
    failure?: number;
    results?: Record<string, unknown>;
};

// @public
export interface ErrorResponse {
    code?: string;
    message?: string;
}

// @public
export interface GcmCredential {
    gcmEndpoint?: string;
    googleApiKey?: string;
}

// @public
export enum KnownSkuName {
    // (undocumented)
    Basic = "Basic",
    // (undocumented)
    Free = "Free",
    // (undocumented)
    Standard = "Standard"
}

// @public
export interface MpnsCredential {
    certificateKey?: string;
    mpnsCertificate?: string;
    thumbprint?: string;
}

// @public
export type NamespaceCreateOrUpdateParameters = Resource & {
    namePropertiesName?: string;
    provisioningState?: string;
    region?: string;
    readonly metricId?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
    serviceBusEndpoint?: string;
    subscriptionId?: string;
    scaleUnit?: string;
    enabled?: boolean;
    critical?: boolean;
    dataCenter?: string;
    namespaceType?: NamespaceType;
};

// @public
export interface NamespaceListResult {
    nextLink?: string;
    value?: NamespaceResource[];
}

// @public
export interface NamespacePatchParameters {
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type NamespaceResource = Resource & {
    namePropertiesName?: string;
    provisioningState?: string;
    region?: string;
    readonly metricId?: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
    serviceBusEndpoint?: string;
    subscriptionId?: string;
    scaleUnit?: string;
    enabled?: boolean;
    critical?: boolean;
    dataCenter?: string;
    namespaceType?: NamespaceType;
};

// @public
export interface Namespaces {
    beginDelete(resourceGroupName: string, namespaceName: string, options?: NamespacesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceGroupName: string, namespaceName: string, options?: NamespacesDeleteOptionalParams): Promise<void>;
    checkAvailability(parameters: CheckAvailabilityParameters, options?: NamespacesCheckAvailabilityOptionalParams): Promise<NamespacesCheckAvailabilityResponse>;
    createOrUpdate(resourceGroupName: string, namespaceName: string, parameters: NamespaceCreateOrUpdateParameters, options?: NamespacesCreateOrUpdateOptionalParams): Promise<NamespacesCreateOrUpdateResponse>;
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: SharedAccessAuthorizationRuleCreateOrUpdateParameters, options?: NamespacesCreateOrUpdateAuthorizationRuleOptionalParams): Promise<NamespacesCreateOrUpdateAuthorizationRuleResponse>;
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options?: NamespacesDeleteAuthorizationRuleOptionalParams): Promise<void>;
    get(resourceGroupName: string, namespaceName: string, options?: NamespacesGetOptionalParams): Promise<NamespacesGetResponse>;
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options?: NamespacesGetAuthorizationRuleOptionalParams): Promise<NamespacesGetAuthorizationRuleResponse>;
    list(resourceGroupName: string, options?: NamespacesListOptionalParams): PagedAsyncIterableIterator<NamespaceResource>;
    listAll(options?: NamespacesListAllOptionalParams): PagedAsyncIterableIterator<NamespaceResource>;
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, options?: NamespacesListAuthorizationRulesOptionalParams): PagedAsyncIterableIterator<SharedAccessAuthorizationRuleResource>;
    listKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, options?: NamespacesListKeysOptionalParams): Promise<NamespacesListKeysResponse>;
    patch(resourceGroupName: string, namespaceName: string, parameters: NamespacePatchParameters, options?: NamespacesPatchOptionalParams): Promise<NamespacesPatchResponse>;
    regenerateKeys(resourceGroupName: string, namespaceName: string, authorizationRuleName: string, parameters: PolicykeyResource, options?: NamespacesRegenerateKeysOptionalParams): Promise<NamespacesRegenerateKeysResponse>;
}

// @public
export interface NamespacesCheckAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesCheckAvailabilityResponse = CheckAvailabilityResult;

// @public
export interface NamespacesCreateOrUpdateAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

// @public
export interface NamespacesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesCreateOrUpdateResponse = NamespaceResource;

// @public
export interface NamespacesDeleteAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface NamespacesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface NamespacesGetAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

// @public
export interface NamespacesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesGetResponse = NamespaceResource;

// @public
export interface NamespacesListAllNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListAllNextResponse = NamespaceListResult;

// @public
export interface NamespacesListAllOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListAllResponse = NamespaceListResult;

// @public
export interface NamespacesListAuthorizationRulesNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult;

// @public
export interface NamespacesListAuthorizationRulesOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult;

// @public
export interface NamespacesListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListKeysResponse = SharedAccessAuthorizationRuleListResult;

// @public
export interface NamespacesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListNextResponse = NamespaceListResult;

// @public
export interface NamespacesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesListResponse = NamespaceListResult;

// @public
export interface NamespacesPatchOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesPatchResponse = NamespaceResource;

// @public
export interface NamespacesRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NamespacesRegenerateKeysResponse = ResourceListKeys;

// @public
export type NamespaceType = "Messaging" | "NotificationHub";

// @public
export type NotificationHubCreateOrUpdateParameters = Resource & {
    namePropertiesName?: string;
    registrationTtl?: string;
    authorizationRules?: SharedAccessAuthorizationRuleProperties[];
    apnsCredential?: ApnsCredential;
    wnsCredential?: WnsCredential;
    gcmCredential?: GcmCredential;
    mpnsCredential?: MpnsCredential;
    admCredential?: AdmCredential;
    baiduCredential?: BaiduCredential;
};

// @public
export interface NotificationHubListResult {
    nextLink?: string;
    value?: NotificationHubResource[];
}

// @public
export type NotificationHubPatchParameters = Resource & {
    namePropertiesName?: string;
    registrationTtl?: string;
    authorizationRules?: SharedAccessAuthorizationRuleProperties[];
    apnsCredential?: ApnsCredential;
    wnsCredential?: WnsCredential;
    gcmCredential?: GcmCredential;
    mpnsCredential?: MpnsCredential;
    admCredential?: AdmCredential;
    baiduCredential?: BaiduCredential;
};

// @public
export type NotificationHubResource = Resource & {
    namePropertiesName?: string;
    registrationTtl?: string;
    authorizationRules?: SharedAccessAuthorizationRuleProperties[];
    apnsCredential?: ApnsCredential;
    wnsCredential?: WnsCredential;
    gcmCredential?: GcmCredential;
    mpnsCredential?: MpnsCredential;
    admCredential?: AdmCredential;
    baiduCredential?: BaiduCredential;
};

// @public
export interface NotificationHubs {
    checkNotificationHubAvailability(resourceGroupName: string, namespaceName: string, parameters: CheckAvailabilityParameters, options?: NotificationHubsCheckNotificationHubAvailabilityOptionalParams): Promise<NotificationHubsCheckNotificationHubAvailabilityResponse>;
    createOrUpdate(resourceGroupName: string, namespaceName: string, notificationHubName: string, parameters: NotificationHubCreateOrUpdateParameters, options?: NotificationHubsCreateOrUpdateOptionalParams): Promise<NotificationHubsCreateOrUpdateResponse>;
    createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: SharedAccessAuthorizationRuleCreateOrUpdateParameters, options?: NotificationHubsCreateOrUpdateAuthorizationRuleOptionalParams): Promise<NotificationHubsCreateOrUpdateAuthorizationRuleResponse>;
    debugSend(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsDebugSendOptionalParams): Promise<NotificationHubsDebugSendResponse>;
    delete(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsDeleteOptionalParams): Promise<void>;
    deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options?: NotificationHubsDeleteAuthorizationRuleOptionalParams): Promise<void>;
    get(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsGetOptionalParams): Promise<NotificationHubsGetResponse>;
    getAuthorizationRule(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options?: NotificationHubsGetAuthorizationRuleOptionalParams): Promise<NotificationHubsGetAuthorizationRuleResponse>;
    getPnsCredentials(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsGetPnsCredentialsOptionalParams): Promise<NotificationHubsGetPnsCredentialsResponse>;
    list(resourceGroupName: string, namespaceName: string, options?: NotificationHubsListOptionalParams): PagedAsyncIterableIterator<NotificationHubResource>;
    listAuthorizationRules(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsListAuthorizationRulesOptionalParams): PagedAsyncIterableIterator<SharedAccessAuthorizationRuleResource>;
    listKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, options?: NotificationHubsListKeysOptionalParams): Promise<NotificationHubsListKeysResponse>;
    patch(resourceGroupName: string, namespaceName: string, notificationHubName: string, options?: NotificationHubsPatchOptionalParams): Promise<NotificationHubsPatchResponse>;
    regenerateKeys(resourceGroupName: string, namespaceName: string, notificationHubName: string, authorizationRuleName: string, parameters: PolicykeyResource, options?: NotificationHubsRegenerateKeysOptionalParams): Promise<NotificationHubsRegenerateKeysResponse>;
}

// @public
export interface NotificationHubsCheckNotificationHubAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsCheckNotificationHubAvailabilityResponse = CheckAvailabilityResult;

// @public
export interface NotificationHubsCreateOrUpdateAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

// @public
export interface NotificationHubsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsCreateOrUpdateResponse = NotificationHubResource;

// @public
export interface NotificationHubsDebugSendOptionalParams extends coreClient.OperationOptions {
    parameters?: Record<string, unknown>;
}

// @public
export type NotificationHubsDebugSendResponse = DebugSendResponse;

// @public
export interface NotificationHubsDeleteAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface NotificationHubsDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface NotificationHubsGetAuthorizationRuleOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

// @public
export interface NotificationHubsGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface NotificationHubsGetPnsCredentialsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsGetPnsCredentialsResponse = PnsCredentialsResource;

// @public
export type NotificationHubsGetResponse = NotificationHubResource;

// @public
export interface NotificationHubsListAuthorizationRulesNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult;

// @public
export interface NotificationHubsListAuthorizationRulesOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult;

// @public
export interface NotificationHubsListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsListKeysResponse = ResourceListKeys;

// @public
export interface NotificationHubsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsListNextResponse = NotificationHubListResult;

// @public
export interface NotificationHubsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsListResponse = NotificationHubListResult;

// @public (undocumented)
export class NotificationHubsManagementClient extends NotificationHubsManagementClientContext {
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: NotificationHubsManagementClientOptionalParams);
    // (undocumented)
    namespaces: Namespaces;
    // (undocumented)
    notificationHubs: NotificationHubs;
    // (undocumented)
    operations: Operations;
}

// @public (undocumented)
export class NotificationHubsManagementClientContext extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: NotificationHubsManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface NotificationHubsManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface NotificationHubsPatchOptionalParams extends coreClient.OperationOptions {
    parameters?: NotificationHubPatchParameters;
}

// @public
export type NotificationHubsPatchResponse = NotificationHubResource;

// @public
export interface NotificationHubsRegenerateKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type NotificationHubsRegenerateKeysResponse = ResourceListKeys;

// @public
export interface Operation {
    display?: OperationDisplay;
    readonly name?: string;
}

// @public
export interface OperationDisplay {
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type PnsCredentialsResource = Resource & {
    apnsCredential?: ApnsCredential;
    wnsCredential?: WnsCredential;
    gcmCredential?: GcmCredential;
    mpnsCredential?: MpnsCredential;
    admCredential?: AdmCredential;
    baiduCredential?: BaiduCredential;
};

// @public
export interface PolicykeyResource {
    policyKey?: string;
}

// @public (undocumented)
export interface Resource {
    readonly id?: string;
    location?: string;
    readonly name?: string;
    sku?: Sku;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface ResourceListKeys {
    keyName?: string;
    primaryConnectionString?: string;
    primaryKey?: string;
    secondaryConnectionString?: string;
    secondaryKey?: string;
}

// @public
export interface SharedAccessAuthorizationRuleCreateOrUpdateParameters {
    properties: SharedAccessAuthorizationRuleProperties;
}

// @public
export interface SharedAccessAuthorizationRuleListResult {
    nextLink?: string;
    value?: SharedAccessAuthorizationRuleResource[];
}

// @public
export interface SharedAccessAuthorizationRuleProperties {
    readonly claimType?: string;
    readonly claimValue?: string;
    readonly createdTime?: string;
    readonly keyName?: string;
    readonly modifiedTime?: string;
    readonly primaryKey?: string;
    readonly revision?: number;
    rights?: AccessRights[];
    readonly secondaryKey?: string;
}

// @public
export type SharedAccessAuthorizationRuleResource = Resource & {
    rights?: AccessRights[];
    readonly primaryKey?: string;
    readonly secondaryKey?: string;
    readonly keyName?: string;
    readonly claimType?: string;
    readonly claimValue?: string;
    readonly modifiedTime?: string;
    readonly createdTime?: string;
    readonly revision?: number;
};

// @public
export interface Sku {
    capacity?: number;
    family?: string;
    name: SkuName;
    size?: string;
    tier?: string;
}

// @public
export type SkuName = string;

// @public (undocumented)
export interface SubResource {
    id?: string;
}

// @public
export interface WnsCredential {
    packageSid?: string;
    secretKey?: string;
    windowsLiveEndpoint?: string;
}


// (No @packageDocumentation comment for this package)

```
