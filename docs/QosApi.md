# PrismNbapi.QosApi

All URIs are relative to *http://203.255.254.108:47171/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQosEntry**](QosApi.md#createQosEntry) | **POST** /qos/entry | 
[**createQosRule**](QosApi.md#createQosRule) | **POST** /qos/rule | 
[**deleteQosEntry**](QosApi.md#deleteQosEntry) | **DELETE** /qos/entry/{id} | 
[**deleteQosRule**](QosApi.md#deleteQosRule) | **DELETE** /qos/rule/{rule_id} | 
[**getQosEntryInfo**](QosApi.md#getQosEntryInfo) | **GET** /qos/entry/{id} | 
[**getQosRuleInfo**](QosApi.md#getQosRuleInfo) | **GET** /qos/rule/{rule_id} | 


<a name="createQosEntry"></a>
# **createQosEntry**
> ResData createQosEntry(qosEntryInfo)



Create QoS entry

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var qosEntryInfo = new PrismNbapi.QosEntryInfo(); // QosEntryInfo | QoS Entry 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQosEntry(qosEntryInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qosEntryInfo** | [**QosEntryInfo**](QosEntryInfo.md)| QoS Entry 정보. | 

### Return type

[**ResData**](ResData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createQosRule"></a>
# **createQosRule**
> ResData createQosRule(qosRuleInfo)



Create QoS Rule

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var qosRuleInfo = new PrismNbapi.QosRuleInfo(); // QosRuleInfo | QoS Rule 정보.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQosRule(qosRuleInfo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **qosRuleInfo** | [**QosRuleInfo**](QosRuleInfo.md)| QoS Rule 정보. | 

### Return type

[**ResData**](ResData.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteQosEntry"></a>
# **deleteQosEntry**
> deleteQosEntry(id)



Delete QoS Entry

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var id = "id_example"; // String | 삭제하려는 QoS Entry ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQosEntry(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| 삭제하려는 QoS Entry ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteQosRule"></a>
# **deleteQosRule**
> deleteQosRule(ruleId)



Delete QoS Rule

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var ruleId = "ruleId_example"; // String | 삭제하려는 QoS Rule ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteQosRule(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| 삭제하려는 QoS Rule ID | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getQosEntryInfo"></a>
# **getQosEntryInfo**
> EntryInfo getQosEntryInfo(id)



Get QoS Entry information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var id = "id_example"; // String | 정보를 가져올 QoS entry number. all 일 경우, 모든 QoS entry 정보를 가져옴


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQosEntryInfo(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| 정보를 가져올 QoS entry number. all 일 경우, 모든 QoS entry 정보를 가져옴 | 

### Return type

[**EntryInfo**](EntryInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getQosRuleInfo"></a>
# **getQosRuleInfo**
> RuleInfo getQosRuleInfo(ruleId)



Get QoS Rule information

### Example
```javascript
var PrismNbapi = require('prism_nbapi');

var apiInstance = new PrismNbapi.QosApi();

var ruleId = "ruleId_example"; // String | 정보를 가져오고 싶은 QoS Rule ID. all 일 경우, 모든 QoS Rule 정보를 가져옴


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getQosRuleInfo(ruleId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleId** | **String**| 정보를 가져오고 싶은 QoS Rule ID. all 일 경우, 모든 QoS Rule 정보를 가져옴 | 

### Return type

[**RuleInfo**](RuleInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

