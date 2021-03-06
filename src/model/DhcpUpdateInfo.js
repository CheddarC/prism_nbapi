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
    define(['ApiClient', 'model/DhcpSvrInfoHosts'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DhcpSvrInfoHosts'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.DhcpUpdateInfo = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.DhcpSvrInfoHosts);
  }
}(this, function(ApiClient, DhcpSvrInfoHosts) {
  'use strict';




  /**
   * The DhcpUpdateInfo model module.
   * @module model/DhcpUpdateInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DhcpUpdateInfo</code>.
   * @alias module:model/DhcpUpdateInfo
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DhcpUpdateInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DhcpUpdateInfo} obj Optional instance to populate.
   * @return {module:model/DhcpUpdateInfo} The populated <code>DhcpUpdateInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('tenant_name')) {
        obj['tenant_name'] = ApiClient.convertToType(data['tenant_name'], 'String');
      }
      if (data.hasOwnProperty('hosts')) {
        obj['hosts'] = ApiClient.convertToType(data['hosts'], [DhcpSvrInfoHosts]);
      }
    }
    return obj;
  }

  /**
   * @member {String} tenant_name
   */
  exports.prototype['tenant_name'] = undefined;
  /**
   * @member {Array.<module:model/DhcpSvrInfoHosts>} hosts
   */
  exports.prototype['hosts'] = undefined;



  return exports;
}));


