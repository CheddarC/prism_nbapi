# PrismNbapi.InterfaceApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRouterInterface**](InterfaceApi.md#addRouterInterface) | **POST** /prism/interface | Add router interface
[**delRouterInterface**](InterfaceApi.md#delRouterInterface) | **DELETE** /prism/interface/{interface_name} | Delete router interface
[**getAllPhyInterface**](InterfaceApi.md#getAllPhyInterface) | **GET** /prism/interface/physical | 
[**getAllPhyInterfaceDetail**](InterfaceApi.md#getAllPhyInterfaceDetail) | **GET** /prism/interface/all | 
[**getAllPhyInterfaceInTenant**](InterfaceApi.md#getAllPhyInterfaceInTenant) | **GET** /prism/interface/physical/{tenant_name} | Get all PRISM physical interface
[**getAllPrismInterfaceBrief**](InterfaceApi.md#getAllPrismInterfaceBrief) | **GET** /prism/interface/brief | 
[**getAllPrismInterfaceInTenant**](InterfaceApi.md#getAllPrismInterfaceInTenant) | **GET** /prism/interface/all/tenant/{tenant_name} | 
[**getOnePrismInterface**](InterfaceApi.md#getOnePrismInterface) | **GET** /prism/interface/{interface_name}/tenant/{tenant_name} | 
[**updatePrismInterfaceAdd**](InterfaceApi.md#updatePrismInterfaceAdd) | **PUT** /prism/interface/{interface_name}/add | 
[**updatePrismInterfaceRemove**](InterfaceApi.md#updatePrismInterfaceRemove) | **PUT** /prism/interface/{interface_name}/rem | 


<a name="addRouterInterface"></a>
# **addRouterInterface**
> InterfaceName addRouterInterface(routerInterface)

Add router interface

라우터 인터페이스 추가.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var routerInterface = new PrismNbapi.RouterInterface(); // RouterInterface | 인터페이스 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRouterInterface(routerInterface, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **routerInterface** | [**RouterInterface**](RouterInterface.md)| 인터페이스 정보. | 

### Return type

[**InterfaceName**](InterfaceName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="delRouterInterface"></a>
# **delRouterInterface**
> InterfaceName delRouterInterface(interfaceName, opts)

Delete router interface

라우터 인터페이스 제거.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var interfaceName = "interfaceName_example"; // String | 삭제할 인터페이스 이름

var opts = { 
  'tenantName': new PrismNbapi.TenantName() // TenantName | 특정 테넌트 내의 인터페이스 제거 시 해당 테넌트의 이름.(Optional)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.delRouterInterface(interfaceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interfaceName** | **String**| 삭제할 인터페이스 이름 | 
 **tenantName** | [**TenantName**](TenantName.md)| 특정 테넌트 내의 인터페이스 제거 시 해당 테넌트의 이름.(Optional) | [optional] 

### Return type

[**InterfaceName**](InterfaceName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllPhyInterface"></a>
# **getAllPhyInterface**
> PhysicalsObject getAllPhyInterface()



사용할 수 있는 모든 물리 인터페이스의 정보 조회.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPhyInterface(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PhysicalsObject**](PhysicalsObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllPhyInterfaceDetail"></a>
# **getAllPhyInterfaceDetail**
> InterfacesObject getAllPhyInterfaceDetail()



사용할 수 있는 모든 물리 인터페이스의 상세 정보 조회.

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPhyInterfaceDetail(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InterfacesObject**](InterfacesObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllPhyInterfaceInTenant"></a>
# **getAllPhyInterfaceInTenant**
> PhysicalsObject getAllPhyInterfaceInTenant(tenantName)

Get all PRISM physical interface

테넌트에서 사용할 수 있는 모든 물리 인터페이스의 정보 조회. (현재 사용할 수 있는 인터페이스만 조회됨) (사용할 수 있는 인터페이스가 없으면 아무것도 표시되지 않음)

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var tenantName = "tenantName_example"; // String | 테넌트 명


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPhyInterfaceInTenant(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트 명 | 

### Return type

[**PhysicalsObject**](PhysicalsObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllPrismInterfaceBrief"></a>
# **getAllPrismInterfaceBrief**
> InterfacesBriefObject getAllPrismInterfaceBrief()





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPrismInterfaceBrief(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InterfacesBriefObject**](InterfacesBriefObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllPrismInterfaceInTenant"></a>
# **getAllPrismInterfaceInTenant**
> InterfacesObject getAllPrismInterfaceInTenant(tenantName)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPrismInterfaceInTenant(tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**InterfacesObject**](InterfacesObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOnePrismInterface"></a>
# **getOnePrismInterface**
> InterfaceObject getOnePrismInterface(interfaceName, tenantName)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var interfaceName = "interfaceName_example"; // String | 인터페이스 이름

var tenantName = "tenantName_example"; // String | 테넌트의 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOnePrismInterface(interfaceName, tenantName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interfaceName** | **String**| 인터페이스 이름 | 
 **tenantName** | **String**| 테넌트의 이름 | 

### Return type

[**InterfaceObject**](InterfaceObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePrismInterfaceAdd"></a>
# **updatePrismInterfaceAdd**
> InterfaceName updatePrismInterfaceAdd(interfaceName, opts)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var interfaceName = "interfaceName_example"; // String | 인터페이스 이름

var opts = { 
  'updateAddInfo': new PrismNbapi.UpdateAddInfo() // UpdateAddInfo | 업데이트 할 정보
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePrismInterfaceAdd(interfaceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interfaceName** | **String**| 인터페이스 이름 | 
 **updateAddInfo** | [**UpdateAddInfo**](UpdateAddInfo.md)| 업데이트 할 정보 | [optional] 

### Return type

[**InterfaceName**](InterfaceName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePrismInterfaceRemove"></a>
# **updatePrismInterfaceRemove**
> InterfaceName updatePrismInterfaceRemove(interfaceName, opts)





### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.InterfaceApi();

var interfaceName = "interfaceName_example"; // String | 인터페이스 이름

var opts = { 
  'updateAddInfo': new PrismNbapi.UpdateAddInfo() // UpdateAddInfo | 업데이트 할 정보
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePrismInterfaceRemove(interfaceName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **interfaceName** | **String**| 인터페이스 이름 | 
 **updateAddInfo** | [**UpdateAddInfo**](UpdateAddInfo.md)| 업데이트 할 정보 | [optional] 

### Return type

[**InterfaceName**](InterfaceName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

