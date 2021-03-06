/**
 * PRISM NBAPI
 * This is a PRISM NBAPI API Client module.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IntfStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntfStats'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.InterfaceInfoDetail = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.IntfStats);
  }
}(this, function(ApiClient, IntfStats) {
  'use strict';




  /**
   * The InterfaceInfoDetail model module.
   * @module model/InterfaceInfoDetail
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InterfaceInfoDetail</code>.
   * Get All PRISM Interface 요청의 res body에 사용
   * @alias module:model/InterfaceInfoDetail
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>InterfaceInfoDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InterfaceInfoDetail} obj Optional instance to populate.
   * @return {module:model/InterfaceInfoDetail} The populated <code>InterfaceInfoDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'String');
      }
      if (data.hasOwnProperty('ip_address')) {
        obj['ip_address'] = ApiClient.convertToType(data['ip_address'], ['String']);
      }
      if (data.hasOwnProperty('intf_name')) {
        obj['intf_name'] = ApiClient.convertToType(data['intf_name'], 'String');
      }
      if (data.hasOwnProperty('tenant_name')) {
        obj['tenant_name'] = ApiClient.convertToType(data['tenant_name'], 'String');
      }
      if (data.hasOwnProperty('hw_address')) {
        obj['hw_address'] = ApiClient.convertToType(data['hw_address'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('vlan_id')) {
        obj['vlan_id'] = ApiClient.convertToType(data['vlan_id'], 'String');
      }
      if (data.hasOwnProperty('translate')) {
        obj['translate'] = ApiClient.convertToType(data['translate'], 'String');
      }
      if (data.hasOwnProperty('stp')) {
        obj['stp'] = ApiClient.convertToType(data['stp'], 'String');
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = IntfStats.constructFromObject(data['stats']);
      }
    }
    return obj;
  }

  /**
   * @member {String} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {Array.<String>} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * 인터페이스 이름
   * @member {String} intf_name
   */
  exports.prototype['intf_name'] = undefined;
  /**
   * 테넌트 이름
   * @member {String} tenant_name
   */
  exports.prototype['tenant_name'] = undefined;
  /**
   * MAC 주소
   * @member {String} hw_address
   */
  exports.prototype['hw_address'] = undefined;
  /**
   * 인터페이스 타입
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * vlan 아이디
   * @member {String} vlan_id
   */
  exports.prototype['vlan_id'] = undefined;
  /**
   * translate 상태(on | off | None)
   * @member {module:model/InterfaceInfoDetail.TranslateEnum} translate
   */
  exports.prototype['translate'] = undefined;
  /**
   * stp 상태(on | off | None)
   * @member {module:model/InterfaceInfoDetail.StpEnum} stp
   */
  exports.prototype['stp'] = undefined;
  /**
   * @member {module:model/IntfStats} stats
   */
  exports.prototype['stats'] = undefined;


  /**
   * Allowed values for the <code>translate</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TranslateEnum = {
    /**
     * value: "on"
     * @const
     */
    "on": "on",
    /**
     * value: "off"
     * @const
     */
    "off": "off",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };

  /**
   * Allowed values for the <code>stp</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StpEnum = {
    /**
     * value: "on"
     * @const
     */
    "on": "on",
    /**
     * value: "off"
     * @const
     */
    "off": "off",
    /**
     * value: "None"
     * @const
     */
    "None": "None"  };


  return exports;
}));


