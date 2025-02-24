/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list NotificationHubs operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of NotificationHubs operations supported by the Microsoft.NotificationHubs resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results if there are any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A NotificationHubs REST API operation */
export interface Operation {
  /**
   * Operation name: {provider}/{resource}/{operation}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /**
   * Service provider: Microsoft.NotificationHubs
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * Resource on which the operation is performed: Invoice, etc.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * Operation type: Read, write, delete, etc.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
}

/** Error response indicates NotificationHubs service is not able to process the incoming request. The reason is provided in the error message. */
export interface ErrorResponse {
  /** Error code. */
  code?: string;
  /** Error message indicating why the operation failed. */
  message?: string;
}

/** Parameters supplied to the Check Name Availability for Namespace and NotificationHubs. */
export interface CheckAvailabilityParameters {
  /**
   * Resource Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** Resource name */
  name: string;
  /**
   * Resource type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Resource location */
  location?: string;
  /** Resource tags */
  tags?: { [propertyName: string]: string };
  /** The sku of the created namespace */
  sku?: Sku;
  /** True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. */
  isAvailiable?: boolean;
}

/** The Sku description for a namespace */
export interface Sku {
  /** Name of the notification hub sku */
  name: SkuName;
  /** The tier of particular sku */
  tier?: string;
  /** The Sku size */
  size?: string;
  /** The Sku Family */
  family?: string;
  /** The capacity of the resource */
  capacity?: number;
}

export interface Resource {
  /**
   * Resource Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Resource location */
  location?: string;
  /** Resource tags */
  tags?: { [propertyName: string]: string };
  /** The sku of the created namespace */
  sku?: Sku;
}

/** Parameters supplied to the Patch Namespace operation. */
export interface NamespacePatchParameters {
  /** Resource tags */
  tags?: { [propertyName: string]: string };
  /** The sku of the created namespace */
  sku?: Sku;
}

/** Parameters supplied to the CreateOrUpdate Namespace AuthorizationRules. */
export interface SharedAccessAuthorizationRuleCreateOrUpdateParameters {
  /** Properties of the Namespace AuthorizationRules. */
  properties: SharedAccessAuthorizationRuleProperties;
}

/** SharedAccessAuthorizationRule properties. */
export interface SharedAccessAuthorizationRuleProperties {
  /** The rights associated with the rule. */
  rights?: AccessRights[];
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly primaryKey?: string;
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly secondaryKey?: string;
  /**
   * A string that describes the authorization rule.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly keyName?: string;
  /**
   * A string that describes the claim type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly claimType?: string;
  /**
   * A string that describes the claim value
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly claimValue?: string;
  /**
   * The last modified time for this rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly modifiedTime?: string;
  /**
   * The created time for this rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdTime?: string;
  /**
   * The revision number for the rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly revision?: number;
}

/** The response of the List Namespace operation. */
export interface NamespaceListResult {
  /** Result of the List Namespace operation. */
  value?: NamespaceResource[];
  /** Link to the next set of results. Not empty if Value contains incomplete list of Namespaces */
  nextLink?: string;
}

/** The response of the List Namespace operation. */
export interface SharedAccessAuthorizationRuleListResult {
  /** Result of the List AuthorizationRules operation. */
  value?: SharedAccessAuthorizationRuleResource[];
  /** Link to the next set of results. Not empty if Value contains incomplete list of AuthorizationRules */
  nextLink?: string;
}

/** Namespace/NotificationHub Regenerate Keys */
export interface PolicykeyResource {
  /** Name of the key that has to be regenerated for the Namespace/Notification Hub Authorization Rule. The value can be Primary Key/Secondary Key. */
  policyKey?: string;
}

/** Namespace/NotificationHub Connection String */
export interface ResourceListKeys {
  /** PrimaryConnectionString of the AuthorizationRule. */
  primaryConnectionString?: string;
  /** SecondaryConnectionString of the created AuthorizationRule */
  secondaryConnectionString?: string;
  /** PrimaryKey of the created AuthorizationRule. */
  primaryKey?: string;
  /** SecondaryKey of the created AuthorizationRule */
  secondaryKey?: string;
  /** KeyName of the created AuthorizationRule */
  keyName?: string;
}

/** Description of a NotificationHub ApnsCredential. */
export interface ApnsCredential {
  /** The APNS certificate. Specify if using Certificate Authentication Mode. */
  apnsCertificate?: string;
  /** The APNS certificate password if it exists. */
  certificateKey?: string;
  /** The APNS endpoint of this credential. If using Certificate Authentication Mode and Sandbox specify 'gateway.sandbox.push.apple.com'. If using Certificate Authentication Mode and Production specify 'gateway.push.apple.com'. If using Token Authentication Mode and Sandbox specify 'https://api.development.push.apple.com:443/3/device'. If using Token Authentication Mode and Production specify 'https://api.push.apple.com:443/3/device'. */
  endpoint?: string;
  /** The APNS certificate thumbprint. Specify if using Certificate Authentication Mode. */
  thumbprint?: string;
  /** A 10-character key identifier (kid) key, obtained from your developer account. Specify if using Token Authentication Mode. */
  keyId?: string;
  /** The name of the application or BundleId. Specify if using Token Authentication Mode. */
  appName?: string;
  /** The issuer (iss) registered claim key. The value is a 10-character TeamId, obtained from your developer account. Specify if using Token Authentication Mode. */
  appId?: string;
  /** Provider Authentication Token, obtained through your developer account. Specify if using Token Authentication Mode. */
  token?: string;
}

/** Description of a NotificationHub WnsCredential. */
export interface WnsCredential {
  /** The package ID for this credential. */
  packageSid?: string;
  /** The secret key. */
  secretKey?: string;
  /** The Windows Live endpoint. */
  windowsLiveEndpoint?: string;
}

/** Description of a NotificationHub GcmCredential. */
export interface GcmCredential {
  /** The FCM legacy endpoint. Default value is 'https://fcm.googleapis.com/fcm/send' */
  gcmEndpoint?: string;
  /** The Google API key. */
  googleApiKey?: string;
}

/** Description of a NotificationHub MpnsCredential. */
export interface MpnsCredential {
  /** The MPNS certificate. */
  mpnsCertificate?: string;
  /** The certificate key for this credential. */
  certificateKey?: string;
  /** The MPNS certificate Thumbprint */
  thumbprint?: string;
}

/** Description of a NotificationHub AdmCredential. */
export interface AdmCredential {
  /** The client identifier. */
  clientId?: string;
  /** The credential secret access key. */
  clientSecret?: string;
  /** The URL of the authorization token. */
  authTokenUrl?: string;
}

/** Description of a NotificationHub BaiduCredential. */
export interface BaiduCredential {
  /** Baidu Api Key. */
  baiduApiKey?: string;
  /** Baidu Endpoint. */
  baiduEndPoint?: string;
  /** Baidu Secret Key */
  baiduSecretKey?: string;
}

/** The response of the List NotificationHub operation. */
export interface NotificationHubListResult {
  /** Result of the List NotificationHub operation. */
  value?: NotificationHubResource[];
  /** Link to the next set of results. Not empty if Value contains incomplete list of NotificationHub */
  nextLink?: string;
}

export interface SubResource {
  /** Resource Id */
  id?: string;
}

/** Description of a CheckAvailability resource. */
export type CheckAvailabilityResult = Resource & {
  /** True if the name is available and can be used to create new Namespace/NotificationHub. Otherwise false. */
  isAvailiable?: boolean;
};

/** Parameters supplied to the CreateOrUpdate Namespace operation. */
export type NamespaceCreateOrUpdateParameters = Resource & {
  /** The name of the namespace. */
  namePropertiesName?: string;
  /** Provisioning state of the Namespace. */
  provisioningState?: string;
  /** Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe */
  region?: string;
  /**
   * Identifier for Azure Insights metrics
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly metricId?: string;
  /** Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting */
  status?: string;
  /** The time the namespace was created. */
  createdAt?: Date;
  /** The time the namespace was updated. */
  updatedAt?: Date;
  /** Endpoint you can use to perform NotificationHub operations. */
  serviceBusEndpoint?: string;
  /** The Id of the Azure subscription associated with the namespace. */
  subscriptionId?: string;
  /** ScaleUnit where the namespace gets created */
  scaleUnit?: string;
  /** Whether or not the namespace is currently enabled. */
  enabled?: boolean;
  /** Whether or not the namespace is set as Critical. */
  critical?: boolean;
  /** Data center for the namespace */
  dataCenter?: string;
  /** The namespace type. */
  namespaceType?: NamespaceType;
};

/** Description of a Namespace resource. */
export type NamespaceResource = Resource & {
  /** The name of the namespace. */
  namePropertiesName?: string;
  /** Provisioning state of the Namespace. */
  provisioningState?: string;
  /** Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe */
  region?: string;
  /**
   * Identifier for Azure Insights metrics
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly metricId?: string;
  /** Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting */
  status?: string;
  /** The time the namespace was created. */
  createdAt?: Date;
  /** The time the namespace was updated. */
  updatedAt?: Date;
  /** Endpoint you can use to perform NotificationHub operations. */
  serviceBusEndpoint?: string;
  /** The Id of the Azure subscription associated with the namespace. */
  subscriptionId?: string;
  /** ScaleUnit where the namespace gets created */
  scaleUnit?: string;
  /** Whether or not the namespace is currently enabled. */
  enabled?: boolean;
  /** Whether or not the namespace is set as Critical. */
  critical?: boolean;
  /** Data center for the namespace */
  dataCenter?: string;
  /** The namespace type. */
  namespaceType?: NamespaceType;
};

/** Description of a Namespace AuthorizationRules. */
export type SharedAccessAuthorizationRuleResource = Resource & {
  /** The rights associated with the rule. */
  rights?: AccessRights[];
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly primaryKey?: string;
  /**
   * A base64-encoded 256-bit primary key for signing and validating the SAS token.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly secondaryKey?: string;
  /**
   * A string that describes the authorization rule.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly keyName?: string;
  /**
   * A string that describes the claim type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly claimType?: string;
  /**
   * A string that describes the claim value
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly claimValue?: string;
  /**
   * The last modified time for this rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly modifiedTime?: string;
  /**
   * The created time for this rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdTime?: string;
  /**
   * The revision number for the rule
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly revision?: number;
};

/** Parameters supplied to the CreateOrUpdate NotificationHub operation. */
export type NotificationHubCreateOrUpdateParameters = Resource & {
  /** The NotificationHub name. */
  namePropertiesName?: string;
  /** The RegistrationTtl of the created NotificationHub */
  registrationTtl?: string;
  /** The AuthorizationRules of the created NotificationHub */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /** The ApnsCredential of the created NotificationHub */
  apnsCredential?: ApnsCredential;
  /** The WnsCredential of the created NotificationHub */
  wnsCredential?: WnsCredential;
  /** The GcmCredential of the created NotificationHub */
  gcmCredential?: GcmCredential;
  /** The MpnsCredential of the created NotificationHub */
  mpnsCredential?: MpnsCredential;
  /** The AdmCredential of the created NotificationHub */
  admCredential?: AdmCredential;
  /** The BaiduCredential of the created NotificationHub */
  baiduCredential?: BaiduCredential;
};

/** Description of a NotificationHub Resource. */
export type NotificationHubResource = Resource & {
  /** The NotificationHub name. */
  namePropertiesName?: string;
  /** The RegistrationTtl of the created NotificationHub */
  registrationTtl?: string;
  /** The AuthorizationRules of the created NotificationHub */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /** The ApnsCredential of the created NotificationHub */
  apnsCredential?: ApnsCredential;
  /** The WnsCredential of the created NotificationHub */
  wnsCredential?: WnsCredential;
  /** The GcmCredential of the created NotificationHub */
  gcmCredential?: GcmCredential;
  /** The MpnsCredential of the created NotificationHub */
  mpnsCredential?: MpnsCredential;
  /** The AdmCredential of the created NotificationHub */
  admCredential?: AdmCredential;
  /** The BaiduCredential of the created NotificationHub */
  baiduCredential?: BaiduCredential;
};

/** Parameters supplied to the patch NotificationHub operation. */
export type NotificationHubPatchParameters = Resource & {
  /** The NotificationHub name. */
  namePropertiesName?: string;
  /** The RegistrationTtl of the created NotificationHub */
  registrationTtl?: string;
  /** The AuthorizationRules of the created NotificationHub */
  authorizationRules?: SharedAccessAuthorizationRuleProperties[];
  /** The ApnsCredential of the created NotificationHub */
  apnsCredential?: ApnsCredential;
  /** The WnsCredential of the created NotificationHub */
  wnsCredential?: WnsCredential;
  /** The GcmCredential of the created NotificationHub */
  gcmCredential?: GcmCredential;
  /** The MpnsCredential of the created NotificationHub */
  mpnsCredential?: MpnsCredential;
  /** The AdmCredential of the created NotificationHub */
  admCredential?: AdmCredential;
  /** The BaiduCredential of the created NotificationHub */
  baiduCredential?: BaiduCredential;
};

/** Description of a NotificationHub Resource. */
export type DebugSendResponse = Resource & {
  /** successful send */
  success?: number;
  /** send failure */
  failure?: number;
  /** actual failure description */
  results?: Record<string, unknown>;
};

/** Description of a NotificationHub PNS Credentials. */
export type PnsCredentialsResource = Resource & {
  /** The ApnsCredential of the created NotificationHub */
  apnsCredential?: ApnsCredential;
  /** The WnsCredential of the created NotificationHub */
  wnsCredential?: WnsCredential;
  /** The GcmCredential of the created NotificationHub */
  gcmCredential?: GcmCredential;
  /** The MpnsCredential of the created NotificationHub */
  mpnsCredential?: MpnsCredential;
  /** The AdmCredential of the created NotificationHub */
  admCredential?: AdmCredential;
  /** The BaiduCredential of the created NotificationHub */
  baiduCredential?: BaiduCredential;
};

/** Known values of {@link SkuName} that the service accepts. */
export enum KnownSkuName {
  Free = "Free",
  Basic = "Basic",
  Standard = "Standard"
}

/**
 * Defines values for SkuName. \
 * {@link KnownSkuName} can be used interchangeably with SkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Free** \
 * **Basic** \
 * **Standard**
 */
export type SkuName = string;
/** Defines values for NamespaceType. */
export type NamespaceType = "Messaging" | "NotificationHub";
/** Defines values for AccessRights. */
export type AccessRights = "Manage" | "Send" | "Listen";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface NamespacesCheckAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkAvailability operation. */
export type NamespacesCheckAvailabilityResponse = CheckAvailabilityResult;

/** Optional parameters. */
export interface NamespacesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type NamespacesCreateOrUpdateResponse = NamespaceResource;

/** Optional parameters. */
export interface NamespacesPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type NamespacesPatchResponse = NamespaceResource;

/** Optional parameters. */
export interface NamespacesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface NamespacesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type NamespacesGetResponse = NamespaceResource;

/** Optional parameters. */
export interface NamespacesCreateOrUpdateAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAuthorizationRule operation. */
export type NamespacesCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

/** Optional parameters. */
export interface NamespacesDeleteAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NamespacesGetAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAuthorizationRule operation. */
export type NamespacesGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

/** Optional parameters. */
export interface NamespacesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type NamespacesListResponse = NamespaceListResult;

/** Optional parameters. */
export interface NamespacesListAllOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAll operation. */
export type NamespacesListAllResponse = NamespaceListResult;

/** Optional parameters. */
export interface NamespacesListAuthorizationRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRules operation. */
export type NamespacesListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult;

/** Optional parameters. */
export interface NamespacesListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type NamespacesListKeysResponse = SharedAccessAuthorizationRuleListResult;

/** Optional parameters. */
export interface NamespacesRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type NamespacesRegenerateKeysResponse = ResourceListKeys;

/** Optional parameters. */
export interface NamespacesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type NamespacesListNextResponse = NamespaceListResult;

/** Optional parameters. */
export interface NamespacesListAllNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllNext operation. */
export type NamespacesListAllNextResponse = NamespaceListResult;

/** Optional parameters. */
export interface NamespacesListAuthorizationRulesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRulesNext operation. */
export type NamespacesListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult;

/** Optional parameters. */
export interface NotificationHubsCheckNotificationHubAvailabilityOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the checkNotificationHubAvailability operation. */
export type NotificationHubsCheckNotificationHubAvailabilityResponse = CheckAvailabilityResult;

/** Optional parameters. */
export interface NotificationHubsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type NotificationHubsCreateOrUpdateResponse = NotificationHubResource;

/** Optional parameters. */
export interface NotificationHubsPatchOptionalParams
  extends coreClient.OperationOptions {
  /** Parameters supplied to patch a NotificationHub Resource. */
  parameters?: NotificationHubPatchParameters;
}

/** Contains response data for the patch operation. */
export type NotificationHubsPatchResponse = NotificationHubResource;

/** Optional parameters. */
export interface NotificationHubsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NotificationHubsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type NotificationHubsGetResponse = NotificationHubResource;

/** Optional parameters. */
export interface NotificationHubsDebugSendOptionalParams
  extends coreClient.OperationOptions {
  /** Debug send parameters */
  parameters?: Record<string, unknown>;
}

/** Contains response data for the debugSend operation. */
export type NotificationHubsDebugSendResponse = DebugSendResponse;

/** Optional parameters. */
export interface NotificationHubsCreateOrUpdateAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAuthorizationRule operation. */
export type NotificationHubsCreateOrUpdateAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

/** Optional parameters. */
export interface NotificationHubsDeleteAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NotificationHubsGetAuthorizationRuleOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAuthorizationRule operation. */
export type NotificationHubsGetAuthorizationRuleResponse = SharedAccessAuthorizationRuleResource;

/** Optional parameters. */
export interface NotificationHubsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type NotificationHubsListResponse = NotificationHubListResult;

/** Optional parameters. */
export interface NotificationHubsListAuthorizationRulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRules operation. */
export type NotificationHubsListAuthorizationRulesResponse = SharedAccessAuthorizationRuleListResult;

/** Optional parameters. */
export interface NotificationHubsListKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listKeys operation. */
export type NotificationHubsListKeysResponse = ResourceListKeys;

/** Optional parameters. */
export interface NotificationHubsRegenerateKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateKeys operation. */
export type NotificationHubsRegenerateKeysResponse = ResourceListKeys;

/** Optional parameters. */
export interface NotificationHubsGetPnsCredentialsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getPnsCredentials operation. */
export type NotificationHubsGetPnsCredentialsResponse = PnsCredentialsResource;

/** Optional parameters. */
export interface NotificationHubsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type NotificationHubsListNextResponse = NotificationHubListResult;

/** Optional parameters. */
export interface NotificationHubsListAuthorizationRulesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthorizationRulesNext operation. */
export type NotificationHubsListAuthorizationRulesNextResponse = SharedAccessAuthorizationRuleListResult;

/** Optional parameters. */
export interface NotificationHubsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
