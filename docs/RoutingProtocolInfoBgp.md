# PrismNbapi.RoutingProtocolInfoBgp

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routerId** | **String** |  | [optional] 
**redistribute** | [**[SettingInfoRedistribute]**](SettingInfoRedistribute.md) |  | [optional] 
**network** | [**[SettingInfoNetwork]**](SettingInfoNetwork.md) |  | [optional] 
**neighbor** | [**[SettingInfoNeighbor]**](SettingInfoNeighbor.md) | OSPF 라우터의 neighbor를 설정할 때 사용되는 인자. dict를 인자로 가지는 리스트. 각 dict는 neighbor_id 필드를 필수로 가진다. | [optional] 
**asId** | **String** |  | [optional] 


