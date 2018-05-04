# PrismNbapi.RouterInterface

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | 인터페이스 이름 - type이 physical일 경우, Get All PRISM Physical Interface API로 가져올 수 있는 인터페이스만 사용이 가능함 - type이 bridge일 경우, 앞에 pr이 반드시 붙고 뒤에는 마음대로 하면 된다 - type이 bond일 경우, 되도록이면 pr-bond1 식으로 앞에 pr이 붙는 이름으로 사용 | 
**type** | **String** | 인터페이스 타입 physical, bridge, bond 중 선택가능 | 
**ip** | **[String]** | 인터페이스에 설정할 IP - IPv4면 1.0.0.1/24 식으로 netmask 까지 입력 - IPv6면 3333::3/64 식으로 netmask까지 입력 | [optional] 
**tenantName** | **String** |  | [optional] 
**translate** | **String** | on | off | null 테넌트간 통신을 위한 루프백 설정 true를 전송 시 xvid.cfg에 해당 정보 저장. 그 외는 무시 (type이 bridge인 경우 사용) | [optional] 
**stp** | **String** | on | off | null stp 적용 설정. default는 null (type이 bridge인 경우 사용) | [optional] 
**vlanId** | **Number** | Bridge 인터페이스에 설정할 vlan 번호 (type이 bridge인 경우 사용) | [optional] 
**brIntfs** | [**[RouterInterfaceBrIntfs]**](RouterInterfaceBrIntfs.md) | Bridge 인터페이스에 포함시킬 인터페이스들 이름과 타입 list | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `physical` (value: `"physical"`)

* `bridge` (value: `"bridge"`)

* `bond` (value: `"bond"`)




<a name="TranslateEnum"></a>
## Enum: TranslateEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)

* `null` (value: `"null"`)




<a name="StpEnum"></a>
## Enum: StpEnum


* `on` (value: `"on"`)

* `off` (value: `"off"`)

* `null` (value: `"null"`)




