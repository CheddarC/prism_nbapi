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
    root.PrismNbapi.QosEntryInfo = factory(root.PrismNbapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QosEntryInfo model module.
   * @module model/QosEntryInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>QosEntryInfo</code>.
   * @alias module:model/QosEntryInfo
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>QosEntryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QosEntryInfo} obj Optional instance to populate.
   * @return {module:model/QosEntryInfo} The populated <code>QosEntryInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('qos_number')) {
        obj['qos_number'] = ApiClient.convertToType(data['qos_number'], 'Number');
      }
      if (data.hasOwnProperty('tenant')) {
        obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
      }
      if (data.hasOwnProperty('in_port')) {
        obj['in_port'] = ApiClient.convertToType(data['in_port'], 'Number');
      }
      if (data.hasOwnProperty('vlan_id')) {
        obj['vlan_id'] = ApiClient.convertToType(data['vlan_id'], 'Number');
      }
      if (data.hasOwnProperty('src_ip')) {
        obj['src_ip'] = ApiClient.convertToType(data['src_ip'], 'String');
      }
      if (data.hasOwnProperty('dst_ip')) {
        obj['dst_ip'] = ApiClient.convertToType(data['dst_ip'], 'String');
      }
      if (data.hasOwnProperty('rule_id')) {
        obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} qos_number
   */
  exports.prototype['qos_number'] = undefined;
  /**
   * @member {String} tenant
   */
  exports.prototype['tenant'] = undefined;
  /**
   * @member {Number} in_port
   */
  exports.prototype['in_port'] = undefined;
  /**
   * @member {Number} vlan_id
   */
  exports.prototype['vlan_id'] = undefined;
  /**
   * @member {String} src_ip
   */
  exports.prototype['src_ip'] = undefined;
  /**
   * @member {String} dst_ip
   */
  exports.prototype['dst_ip'] = undefined;
  /**
   * @member {String} rule_id
   */
  exports.prototype['rule_id'] = undefined;



  return exports;
}));


