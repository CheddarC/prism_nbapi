# PrismNbapi.SettingInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routerId** | **String** |  | [optional] 
**asId** | **String** |  | [optional] 
**network** | [**[SettingInfoNetwork]**](SettingInfoNetwork.md) |  | [optional] 
**area** | [**[SettingInfoArea]**](SettingInfoArea.md) | OSPF area를 설정할 때 사용되는  필드로 dict를 인자로 가지는 리스트. 각 dict는 id와 range 필드를 필수로 가진다. | [optional] 
**neighbor** | [**[SettingInfoNeighbor]**](SettingInfoNeighbor.md) | OSPF 라우터의 neighbor를 설정할 때 사용되는 인자. dict를 인자로 가지는 리스트. 각 dict는 neighbor_id 필드를 필수로 가진다. | [optional] 
**redistribute** | [**[SettingInfoRedistribute]**](SettingInfoRedistribute.md) | OSPF Redistribute 설정 | [optional] 
**ipv4Prefix** | [**[SettingInfoIpv4Prefix]**](SettingInfoIpv4Prefix.md) | IP prefix-list 설정 | [optional] 
**routeMap** | [**[SettingInfoRouteMap]**](SettingInfoRouteMap.md) |  | [optional] 


