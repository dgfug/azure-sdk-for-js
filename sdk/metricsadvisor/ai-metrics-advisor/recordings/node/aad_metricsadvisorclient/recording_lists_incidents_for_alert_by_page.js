let nock = require('nock');

module.exports.hash = "ecd9dbd91cd609272604a1690c647b3c";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '0a8d98df-ed70-4423-9404-02943caa4700',
  'x-ms-ests-server',
  '2.1.12197.4 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AkGxwNutM09GvSuJK396m4g; expires=Thu, 16-Dec-2021 00:32:26 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevre_8SFoaJba6PGNku6Yyb1L1OKOFnJBqzhgSscoacFUTKA9Nl3Sjr96wzAAgZzA8itz9vLiu6sL4LAICobV-9NGHsawVBiQ93NRtWnAOHju21nhcIervdFvoXehulSKac332fhhGohsrsYmZ7JHS4Kj4NakRJY0jHtr-taUXe1BkgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:32:26 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/12345678-1234-1234-1234-123456789012/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/12345678-1234-1234-1234-123456789012/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '8520cdd0-1de8-4392-8fa3-da6854908c00',
  'x-ms-ests-server',
  '2.1.12231.7 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AnRsYu2IyklLhh2PoWxXk3o; expires=Thu, 16-Dec-2021 00:32:26 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7Wevr0D1Dx-mUkzogvRcEuFUPyXQz2witWnR3mPGtWNFx6N1Pebhc-zK6luJtFp6JxeNo1VKBdLqhOob7h2ytJuaoumacr65LHivThMToR9vdN-_gbiy6XBnVUF-dvuahTcJn-v34t1saTaFkbAH3JG476zgV8zfndBez7xl3vY7eD1QgAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:32:26 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/12345678-1234-1234-1234-123456789012/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=f1d2ae8f-f5b0-47cd-8dd0-f020b272399d&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'a60316e7-1860-4a77-b48a-9bf7f5f88700',
  'x-ms-ests-server',
  '2.1.12231.7 - EUS ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=AuD5CmjyVkxJmKmEnX9yzmk; expires=Thu, 16-Dec-2021 00:32:27 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Tue, 16 Nov 2021 00:32:26 GMT',
  'Content-Length',
  '1331'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/alert/anomaly/configurations/7edf304f-6487-4e3d-a137-cc4f679bcbc0/alerts/17470297800/incidents')
  .query(true)
  .reply(200, {"value":[{"dataFeedId":"52b0c20c-cb7c-43f0-9507-2a33170342db","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","anomalyDetectionConfigurationId":"26ece682-80a6-4415-89a2-05903dd9a640","incidentId":"30612c95b4c216ef418956c5c6162691-17470297800","startTime":"2021-09-07T00:00:00Z","lastTime":"2021-09-07T00:00:00Z","rootNode":{"dimension":{"region":"Tianjin","category":"Home & Garden"}},"property":{"maxSeverity":"Low","incidentStatus":"Active","valueOfRootNode":18544,"expectedValueOfRootNode":18573.49119556344}}],"@nextLink":"https://endpoint:443/metricsadvisor/v1.0/alert/anomaly/configurations/7edf304f-6487-4e3d-a137-cc4f679bcbc0/alerts/17470297800/incidents?$maxpagesize=1&$skip=1"}, [
  'Content-Length',
  '730',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '00e44392-6264-41b0-b266-c95275058bc9',
  'x-envoy-upstream-service-time',
  '261',
  'apim-request-id',
  '00e44392-6264-41b0-b266-c95275058bc9',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 16 Nov 2021 00:32:26 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/metricsadvisor/v1.0/alert/anomaly/configurations/7edf304f-6487-4e3d-a137-cc4f679bcbc0/alerts/17470297800/incidents')
  .query(true)
  .reply(200, {"value":[{"dataFeedId":"52b0c20c-cb7c-43f0-9507-2a33170342db","metricId":"189ff959-d9f4-45c7-a1e0-f87c9c7ca80f","anomalyDetectionConfigurationId":"26ece682-80a6-4415-89a2-05903dd9a640","incidentId":"4ec127166abf8387b2874bae49734ab1-17470297800","startTime":"2021-09-06T00:00:00Z","lastTime":"2021-09-07T00:00:00Z","rootNode":{"dimension":{"region":"__SUM__","category":"__SUM__"}},"property":{"maxSeverity":"High","incidentStatus":"Active","valueOfRootNode":65120708.60000002,"expectedValueOfRootNode":60928226.58873364}}],"@nextLink":"https://endpoint:443/metricsadvisor/v1.0/alert/anomaly/configurations/7edf304f-6487-4e3d-a137-cc4f679bcbc0/alerts/17470297800/incidents?$maxpagesize=1&$skip=2"}, [
  'Content-Length',
  '735',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '0f263100-70da-4b2c-b026-1540a057da2e',
  'x-envoy-upstream-service-time',
  '253',
  'apim-request-id',
  '0f263100-70da-4b2c-b026-1540a057da2e',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Tue, 16 Nov 2021 00:32:26 GMT'
]);
