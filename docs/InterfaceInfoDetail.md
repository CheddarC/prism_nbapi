# PrismNbapi.InterfaceInfoDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **String** |  | [optional] 
**ipAddress** | **[String]** |  | [optional] 
**intfName** | **String** | 인터페이스 이름 | [optional] 
**tenantName** | **String** | 테넌트 이름 | [optional] 
**hwAddress** | **String** | MAC 주소 | [optional] 
**type** | **String** | 인터페이스 타입 | [optional] 
**vlanId** | **String** | vlan 아이디 | [optional] 
**translate** | **String** | translate 상태(on | off | None) | [optional] 
**stp** | **String** | stp 상태(on | off | None) | [optional] 
**stats** | [**IntfStats**](IntfStats.md) |  | [optional] 


<a name="TranslateEnum"></a>
## Enum: TranslateEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)

* `None` (value: `"None"`)




<a name="StpEnum"></a>
## Enum: StpEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)

* `None` (value: `"None"`)




