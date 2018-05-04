# PrismNbapi.MulticastApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMulticast**](MulticastApi.md#createMulticast) | **POST** /prism/multicast | 
[**createMulticastInTenant**](MulticastApi.md#createMulticastInTenant) | **POST** /prism/multicast/tenant/{tenant_name} | 
[**deleteMulticast**](MulticastApi.md#deleteMulticast) | **DELETE** /prism/multicast | 
[**deleteMulticastInTenant**](MulticastApi.md#deleteMulticastInTenant) | **DELETE** /prism/multicast/tenant/{tenant_name} | 
[**getAllMulicastInfoInTenant**](MulticastApi.md#getAllMulicastInfoInTenant) | **GET** /prism/multicast/tenant/{tenant_name} | 
[**getAllMulticastInfo**](MulticastApi.md#getAllMulticastInfo) | **GET** /prism/multicast | 
[**updateMulticast**](MulticastApi.md#updateMulticast) | **PUT** /prism/multicast | 
[**updateMulticastInTenant**](MulticastApi.md#updateMulticastInTenant) | **PUT** /prism/multicast/tenant/{tenant_name} | 


<a name="createMulticast"></a>
# **createMulticast**
> MulticastInfo createMulticast(multicastInfo)



Create Multicast(pimd)

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var multicastInfo = new PrismNbapi.MulticastInfo(); // MulticastInfo | Multicast 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMulticast(multicastInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multicastInfo** | [**MulticastInfo**](MulticastInfo.md)| Multicast 정보. | 

### Return type

[**MulticastInfo**](MulticastInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMulticastInTenant"></a>
# **createMulticastInTenant**
> MulticastInfo createMulticastInTenant(tenantName, multicastInfo)



Create Multicast in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름

var multicastInfo = new PrismNbapi.MulticastInfo(); // MulticastInfo | Multicast 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMulticastInTenant(tenantName, multicastInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 
 **multicastInfo** | [**MulticastInfo**](MulticastInfo.md)| Multicast 정보. | 

### Return type

[**MulticastInfo**](MulticastInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteMulticast"></a>
# **deleteMulticast**
> MulticastObject deleteMulticast()



Delete Multicast

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMulticast(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteMulticastInTenant"></a>
# **deleteMulticastInTenant**
> MulticastObject deleteMulticastInTenant(tenantName)



Delete Multicast in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMulticastInTenant(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllMulicastInfoInTenant"></a>
# **getAllMulicastInfoInTenant**
> MulticastObject getAllMulicastInfoInTenant(tenantName)



Get all Multicast information in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMulicastInfoInTenant(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllMulticastInfo"></a>
# **getAllMulticastInfo**
> MulticastObject getAllMulticastInfo()



Get all Multicast information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllMulticastInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMulticast"></a>
# **updateMulticast**
> MulticastObject updateMulticast(multicastObject)



Update Multicast

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var multicastObject = new PrismNbapi.MulticastObject(); // MulticastObject | Multicast 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMulticast(multicastObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multicastObject** | [**MulticastObject**](MulticastObject.md)| Multicast 정보. | 

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMulticastInTenant"></a>
# **updateMulticastInTenant**
> MulticastObject updateMulticastInTenant(tenantName, multicastObject)



Update Multicast in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.MulticastApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름

var multicastObject = new PrismNbapi.MulticastObject(); // MulticastObject | VRRP 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMulticastInTenant(tenantName, multicastObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 
 **multicastObject** | [**MulticastObject**](MulticastObject.md)| VRRP 정보. | 

### Return type

[**MulticastObject**](MulticastObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

