# PrismNbapi.RuleInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleId** | **Number** |  | [optional] 
**mode** | **Number** |  | [optional] 
**stats** | **String** | QoS Rule에 설정된 stats 수집 여부 설정값(yes, no 둘 중 하나의 값) | [optional] 
**type** | **String** |  | [optional] 
**meterBands** | [**[QosRuleInfoMeterBands]**](QosRuleInfoMeterBands.md) |  | [optional] 


<a name="StatsEnum"></a>
## Enum: StatsEnum


* `yes` (value: `"yes"`)

* `no` (value: `"no"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `kbps` (value: `"kbps"`)

* `bbps` (value: `"bbps"`)




