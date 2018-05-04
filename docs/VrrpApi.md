# PrismNbapi.VrrpApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVRRP**](VrrpApi.md#createVRRP) | **POST** /prism/vrrp/instance | 
[**createVrrpInTenant**](VrrpApi.md#createVrrpInTenant) | **POST** /prism/vrrp/instance/tenant/{tenant_name} | 
[**deleteVrrpInTenant**](VrrpApi.md#deleteVrrpInTenant) | **DELETE** /prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name} | 
[**deleteVrrpo**](VrrpApi.md#deleteVrrpo) | **DELETE** /prism/vrrp/instance/{vrrp_name} | 
[**getAllVrrpInfo**](VrrpApi.md#getAllVrrpInfo) | **GET** /prism/vrrp/instance/all | 
[**getAllVrrpInfoInTenant**](VrrpApi.md#getAllVrrpInfoInTenant) | **GET** /prism/vrrp/instance/all/tenant/{tenant_name} | 
[**getOneVrrpInfo**](VrrpApi.md#getOneVrrpInfo) | **GET** /prism/vrrp/instance/{vrrp_name} | 
[**getOneVrrpInfoInTenant**](VrrpApi.md#getOneVrrpInfoInTenant) | **GET** /prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name} | 
[**updateVrrpInTenant**](VrrpApi.md#updateVrrpInTenant) | **PUT** /prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name} | 
[**updateVrrpo**](VrrpApi.md#updateVrrpo) | **PUT** /prism/vrrp/instance/{vrrp_name} | 


<a name="createVRRP"></a>
# **createVRRP**
> VrrpInfo createVRRP(vrrpInfo)



Create VRRP

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpInfo = new PrismNbapi.VrrpInfo(); // VrrpInfo | VRRP 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVRRP(vrrpInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpInfo** | [**VrrpInfo**](VrrpInfo.md)| VRRP 정보. | 

### Return type

[**VrrpInfo**](VrrpInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVrrpInTenant"></a>
# **createVrrpInTenant**
> VrrpInfo createVrrpInTenant(tenantName, vrrpInfo)



Create VRRP in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름

var vrrpInfo = new PrismNbapi.VrrpInfo(); // VrrpInfo | 인터페이스 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVrrpInTenant(tenantName, vrrpInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 
 **vrrpInfo** | [**VrrpInfo**](VrrpInfo.md)| 인터페이스 정보. | 

### Return type

[**VrrpInfo**](VrrpInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVrrpInTenant"></a>
# **deleteVrrpInTenant**
> VrrpNameObject deleteVrrpInTenant(vrrpName, tenantName)



Delete VRRP in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVrrpInTenant(vrrpName, tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**VrrpNameObject**](VrrpNameObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteVrrpo"></a>
# **deleteVrrpo**
> VrrpNameObject deleteVrrpo(vrrpName)



Delete VRRP

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteVrrpo(vrrpName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 

### Return type

[**VrrpNameObject**](VrrpNameObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllVrrpInfo"></a>
# **getAllVrrpInfo**
> VrrpsObject getAllVrrpInfo()



Get all VRRP information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllVrrpInfo(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VrrpsObject**](VrrpsObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllVrrpInfoInTenant"></a>
# **getAllVrrpInfoInTenant**
> VrrpsObject getAllVrrpInfoInTenant(tenantName)



Get all VRRP information in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllVrrpInfoInTenant(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**VrrpsObject**](VrrpsObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneVrrpInfo"></a>
# **getOneVrrpInfo**
> VrrpObject getOneVrrpInfo(vrrpName)



Get one VRRP information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOneVrrpInfo(vrrpName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 

### Return type

[**VrrpObject**](VrrpObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneVrrpInfoInTenant"></a>
# **getOneVrrpInfoInTenant**
> VrrpObject getOneVrrpInfoInTenant(vrrpName, tenantName)



Get one VRRP information in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOneVrrpInfoInTenant(vrrpName, tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**VrrpObject**](VrrpObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVrrpInTenant"></a>
# **updateVrrpInTenant**
> VrrpUpdateInfo updateVrrpInTenant(vrrpName, tenantName, vrrpUpdateInfo)



Update VRRP in tenant

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름

var tenantName = "tenantName_example"; // String | 테넌트의 이름

var vrrpUpdateInfo = new PrismNbapi.VrrpUpdateInfo(); // VrrpUpdateInfo | VRRP 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVrrpInTenant(vrrpName, tenantName, vrrpUpdateInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 
 **tenantName** | **String**| 테넌트의 이름 | 
 **vrrpUpdateInfo** | [**VrrpUpdateInfo**](VrrpUpdateInfo.md)| VRRP 정보. | 

### Return type

[**VrrpUpdateInfo**](VrrpUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateVrrpo"></a>
# **updateVrrpo**
> VrrpUpdateInfo updateVrrpo(vrrpName, vrrpUpdateInfo)



Update VRRP

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.VrrpApi();

var vrrpName = "vrrpName_example"; // String | VRRP 인스턴스 이름

var vrrpUpdateInfo = new PrismNbapi.VrrpUpdateInfo(); // VrrpUpdateInfo | VRRP 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVrrpo(vrrpName, vrrpUpdateInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vrrpName** | **String**| VRRP 인스턴스 이름 | 
 **vrrpUpdateInfo** | [**VrrpUpdateInfo**](VrrpUpdateInfo.md)| VRRP 정보. | 

### Return type

[**VrrpUpdateInfo**](VrrpUpdateInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

