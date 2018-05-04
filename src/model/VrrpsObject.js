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
    define(['ApiClient', 'model/VrrpInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VrrpInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.VrrpsObject = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.VrrpInfo);
  }
}(this, function(ApiClient, VrrpInfo) {
  'use strict';




  /**
   * The VrrpsObject model module.
   * @module model/VrrpsObject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VrrpsObject</code>.
   * @alias module:model/VrrpsObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>VrrpsObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VrrpsObject} obj Optional instance to populate.
   * @return {module:model/VrrpsObject} The populated <code>VrrpsObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('vrrps')) {
        obj['vrrps'] = ApiClient.convertToType(data['vrrps'], [VrrpInfo]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/VrrpInfo>} vrrps
   */
  exports.prototype['vrrps'] = undefined;



  return exports;
}));

