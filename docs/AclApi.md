# PrismNbapi.AclApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAclIpv4**](AclApi.md#createAclIpv4) | **POST** /acl/ipv4 | 
[**createAclIpv6**](AclApi.md#createAclIpv6) | **POST** /acl/ipv6 | 
[**deleteAclIpv4**](AclApi.md#deleteAclIpv4) | **DELETE** /acl/ipv4/{acl_number} | 
[**deleteAclIpv6**](AclApi.md#deleteAclIpv6) | **DELETE** /acl/ipv6/{acl_number} | 
[**getAclIpv4Info**](AclApi.md#getAclIpv4Info) | **GET** /acl/ipv4/{acl_number} | 
[**getAclIpv6Info**](AclApi.md#getAclIpv6Info) | **GET** /acl/ipv6/{acl_number} | 


<a name="createAclIpv4"></a>
# **createAclIpv4**
> ResData createAclIpv4(aclInfo)



Create ACL IPv4

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclInfo = new PrismNbapi.AclInfo(); // AclInfo | ACL 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAclIpv4(aclInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclInfo** | [**AclInfo**](AclInfo.md)| ACL 정보. | 

### Return type

[**ResData**](ResData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAclIpv6"></a>
# **createAclIpv6**
> ResData createAclIpv6(aclInfo)



Create ACL IPv6

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclInfo = new PrismNbapi.AclInfo(); // AclInfo | ACL 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAclIpv6(aclInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclInfo** | [**AclInfo**](AclInfo.md)| ACL 정보. | 

### Return type

[**ResData**](ResData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAclIpv4"></a>
# **deleteAclIpv4**
> deleteAclIpv4(aclNumber)



Delete ACL IPv4

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclNumber = "aclNumber_example"; // String | 삭제할 ACL entry number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAclIpv4(aclNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclNumber** | **String**| 삭제할 ACL entry number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteAclIpv6"></a>
# **deleteAclIpv6**
> deleteAclIpv6(aclNumber)



Delete ACL IPv6

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclNumber = "aclNumber_example"; // String | 삭제할 ACL entry number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAclIpv6(aclNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclNumber** | **String**| 삭제할 ACL entry number | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAclIpv4Info"></a>
# **getAclIpv4Info**
> AclInfoData getAclIpv4Info(aclNumber)



Get ACL IPv4 information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclNumber = "aclNumber_example"; // String | 정보를 가져올 ACL entry number. all 일 경우, 모든 ACL entry의 정보를 가져옴


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAclIpv4Info(aclNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclNumber** | **String**| 정보를 가져올 ACL entry number. all 일 경우, 모든 ACL entry의 정보를 가져옴 | 

### Return type

[**AclInfoData**](AclInfoData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAclIpv6Info"></a>
# **getAclIpv6Info**
> AclInfoData getAclIpv6Info(aclNumber)



Get ACL IPv6 information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.AclApi();

var aclNumber = "aclNumber_example"; // String | 정보를 가져올 ACL entry number. all 일 경우, 모든 ACL entry의 정보를 가져옴


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAclIpv6Info(aclNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aclNumber** | **String**| 정보를 가져올 ACL entry number. all 일 경우, 모든 ACL entry의 정보를 가져옴 | 

### Return type

[**AclInfoData**](AclInfoData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

