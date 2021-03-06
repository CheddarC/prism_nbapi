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
    define(['ApiClient', 'model/InterfaceInfoDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InterfaceInfoDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.InterfacesObject = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.InterfaceInfoDetail);
  }
}(this, function(ApiClient, InterfaceInfoDetail) {
  'use strict';




  /**
   * The InterfacesObject model module.
   * @module model/InterfacesObject
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InterfacesObject</code>.
   * @alias module:model/InterfacesObject
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InterfacesObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InterfacesObject} obj Optional instance to populate.
   * @return {module:model/InterfacesObject} The populated <code>InterfacesObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interfaces')) {
        obj['interfaces'] = ApiClient.convertToType(data['interfaces'], [InterfaceInfoDetail]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InterfaceInfoDetail>} interfaces
   */
  exports.prototype['interfaces'] = undefined;



  return exports;
}));


