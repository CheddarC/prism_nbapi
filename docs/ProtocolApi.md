# PrismNbapi.ProtocolApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confPrismRoutingProtocol**](ProtocolApi.md#confPrismRoutingProtocol) | **PUT** /prism/routing/{tenant_name} | 
[**getAllPrismRoutingProtocol**](ProtocolApi.md#getAllPrismRoutingProtocol) | **GET** /prism/routing/all | 
[**getOnePrismRoutingProtocol**](ProtocolApi.md#getOnePrismRoutingProtocol) | **GET** /prism/routing/{tenant_name} | 


<a name="confPrismRoutingProtocol"></a>
# **confPrismRoutingProtocol**
> RoutingObject confPrismRoutingProtocol(tenantName, opts)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.ProtocolApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름

var opts = { 
  'confRoutingProtocolInfo': new PrismNbapi.ConfRoutingProtocolInfo() // ConfRoutingProtocolInfo | 업데이트 할 정보
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.confPrismRoutingProtocol(tenantName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 
 **confRoutingProtocolInfo** | [**ConfRoutingProtocolInfo**](ConfRoutingProtocolInfo.md)| 업데이트 할 정보 | [optional] 

### Return type

[**RoutingObject**](RoutingObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllPrismRoutingProtocol"></a>
# **getAllPrismRoutingProtocol**
> RoutingsObject getAllPrismRoutingProtocol()





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.ProtocolApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPrismRoutingProtocol(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoutingsObject**](RoutingsObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnePrismRoutingProtocol"></a>
# **getOnePrismRoutingProtocol**
> RoutingObject getOnePrismRoutingProtocol(tenantName)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.ProtocolApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnePrismRoutingProtocol(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**RoutingObject**](RoutingObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

