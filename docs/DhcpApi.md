# PrismNbapi.DhcpApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getQosDhcpServerInfo**](DhcpApi.md#getQosDhcpServerInfo) | **GET** /prism/dhcp/{tenant_name}/{intf_name} | 
[**runDhcpServer**](DhcpApi.md#runDhcpServer) | **POST** /prism/dhcp | 
[**terminateDhcpServer**](DhcpApi.md#terminateDhcpServer) | **DELETE** /prism/dhcp/{tenant_name}/{intf_name} | 
[**updateDhcpServer**](DhcpApi.md#updateDhcpServer) | **PUT** /prism/dhcp/{intf_name}/host/{command} | 


<a name="getQosDhcpServerInfo"></a>
# **getQosDhcpServerInfo**
> DhcpSvrInfo getQosDhcpServerInfo(tenantName, intfName)



Get DHCP Server information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.DhcpApi();

var tenantName = "tenantName_example"; // String | Tenant 이름

var intfName = "intfName_example"; // String | DHCP Server가 listening 하는 interface 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQosDhcpServerInfo(tenantName, intfName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| Tenant 이름 | 
 **intfName** | **String**| DHCP Server가 listening 하는 interface 이름 | 

### Return type

[**DhcpSvrInfo**](DhcpSvrInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runDhcpServer"></a>
# **runDhcpServer**
> Result runDhcpServer(dhcpInfo)



Run DHCP Server

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.DhcpApi();

var dhcpInfo = new PrismNbapi.DhcpInfo(); // DhcpInfo | DHCP 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.runDhcpServer(dhcpInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dhcpInfo** | [**DhcpInfo**](DhcpInfo.md)| DHCP 정보. | 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="terminateDhcpServer"></a>
# **terminateDhcpServer**
> Result terminateDhcpServer(tenantName, intfName)



Terminate DHCP Server

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.DhcpApi();

var tenantName = "tenantName_example"; // String | Tenant 이름

var intfName = "intfName_example"; // String | DHCP Server가 listening 하는 interface 이름


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.terminateDhcpServer(tenantName, intfName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantName** | **String**| Tenant 이름 | 
 **intfName** | **String**| DHCP Server가 listening 하는 interface 이름 | 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateDhcpServer"></a>
# **updateDhcpServer**
> Result updateDhcpServer(intfName, command, dhcpUpdateInfo)



Update DHCP Server

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.DhcpApi();

var intfName = "intfName_example"; // String | DHCP Server가 listening 하는 interface 이름

var command = "command_example"; // String | DHCP Server에 host 추가시 add, 삭제시 rem

var dhcpUpdateInfo = new PrismNbapi.DhcpUpdateInfo(); // DhcpUpdateInfo | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDhcpServer(intfName, command, dhcpUpdateInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **intfName** | **String**| DHCP Server가 listening 하는 interface 이름 | 
 **command** | **String**| DHCP Server에 host 추가시 add, 삭제시 rem | 
 **dhcpUpdateInfo** | [**DhcpUpdateInfo**](DhcpUpdateInfo.md)|  | 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

