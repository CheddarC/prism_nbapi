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
    define(['ApiClient', 'model/DhcpInfoHosts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DhcpInfoHosts'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.DhcpInfo = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.DhcpInfoHosts);
  }
}(this, function(ApiClient, DhcpInfoHosts) {
  'use strict';




  /**
   * The DhcpInfo model module.
   * @module model/DhcpInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DhcpInfo</code>.
   * @alias module:model/DhcpInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DhcpInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DhcpInfo} obj Optional instance to populate.
   * @return {module:model/DhcpInfo} The populated <code>DhcpInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tenant_name')) {
        obj['tenant_name'] = ApiClient.convertToType(data['tenant_name'], 'String');
      }
      if (data.hasOwnProperty('interface')) {
        obj['interface'] = ApiClient.convertToType(data['interface'], 'String');
      }
      if (data.hasOwnProperty('hosts')) {
        obj['hosts'] = ApiClient.convertToType(data['hosts'], [DhcpInfoHosts]);
      }
    }
    return obj;
  }

  /**
   * @member {String} tenant_name
   */
  exports.prototype['tenant_name'] = undefined;
  /**
   * @member {String} interface
   */
  exports.prototype['interface'] = undefined;
  /**
   * @member {Array.<module:model/DhcpInfoHosts>} hosts
   */
  exports.prototype['hosts'] = undefined;



  return exports;
}));


