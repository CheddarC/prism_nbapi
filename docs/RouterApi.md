# PrismNbapi.RouterApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRouter**](RouterApi.md#createRouter) | **POST** /prism/router | Create PRISM router
[**deleteRouter**](RouterApi.md#deleteRouter) | **DELETE** /prism/router/{tenant_name} | Delete PRISM router
[**getAllRouter**](RouterApi.md#getAllRouter) | **GET** /prism/router/all | 


<a name="createRouter"></a>
# **createRouter**
> TenantName createRouter(tenantName)

Create PRISM router

지정된 테넌트 이름으로 라우터 생성.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.RouterApi();

var tenantName = new PrismNbapi.TenantName(); // TenantName | 라우터가 속하게 될 테넌트의 이름.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRouter(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | [**TenantName**](TenantName.md)| 라우터가 속하게 될 테넌트의 이름. | 

### Return type

[**TenantName**](TenantName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRouter"></a>
# **deleteRouter**
> TenantName deleteRouter(tenantName)

Delete PRISM router

지정된 테넌트 이름의 라우터 삭제.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.RouterApi();

var tenantName = "tenantName_example"; // String | 삭제할 테넌트 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteRouter(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 삭제할 테넌트 이름 | 

### Return type

[**TenantName**](TenantName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRouter"></a>
# **getAllRouter**
> RoutersObject getAllRouter()



모든 라우터를 조회

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.RouterApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRouter(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoutersObject**](RoutersObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

