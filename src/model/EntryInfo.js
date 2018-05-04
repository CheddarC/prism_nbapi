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
    define(['ApiClient', 'model/EntryInfoData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EntryInfoData'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.EntryInfo = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.EntryInfoData);
  }
}(this, function(ApiClient, EntryInfoData) {
  'use strict';




  /**
   * The EntryInfo model module.
   * @module model/EntryInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EntryInfo</code>.
   * @alias module:model/EntryInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EntryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntryInfo} obj Optional instance to populate.
   * @return {module:model/EntryInfo} The populated <code>EntryInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [EntryInfoData]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EntryInfoData>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


