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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.InterfaceBrief = factory(root.PrismNbapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InterfaceBrief model module.
   * @module model/InterfaceBrief
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InterfaceBrief</code>.
   * @alias module:model/InterfaceBrief
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InterfaceBrief</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InterfaceBrief} obj Optional instance to populate.
   * @return {module:model/InterfaceBrief} The populated <code>InterfaceBrief</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
    }
    return obj;
  }

  /**
   * @member {Array.<String>} ip_address
   */
  exports.prototype['ip_address'] = undefined;
  /**
   * @member {String} intf_name
   */
  exports.prototype['intf_name'] = undefined;
  /**
   * @member {String} tenant_name
   */
  exports.prototype['tenant_name'] = undefined;
  /**
   * @member {String} hw_address
   */
  exports.prototype['hw_address'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} vlan_id
   */
  exports.prototype['vlan_id'] = undefined;
  /**
   * @member {String} translate
   */
  exports.prototype['translate'] = undefined;
  /**
   * @member {String} stp
   */
  exports.prototype['stp'] = undefined;



  return exports;
}));


