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
    define(['ApiClient', 'model/QosRuleInfoMeterBands'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./QosRuleInfoMeterBands'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.RuleInfo = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.QosRuleInfoMeterBands);
  }
}(this, function(ApiClient, QosRuleInfoMeterBands) {
  'use strict';




  /**
   * The RuleInfo model module.
   * @module model/RuleInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RuleInfo</code>.
   * @alias module:model/RuleInfo
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RuleInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuleInfo} obj Optional instance to populate.
   * @return {module:model/RuleInfo} The populated <code>RuleInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('rule_id')) {
        obj['rule_id'] = ApiClient.convertToType(data['rule_id'], 'Number');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'Number');
      }
      if (data.hasOwnProperty('stats')) {
        obj['stats'] = ApiClient.convertToType(data['stats'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('meter_bands')) {
        obj['meter_bands'] = ApiClient.convertToType(data['meter_bands'], [QosRuleInfoMeterBands]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} rule_id
   */
  exports.prototype['rule_id'] = undefined;
  /**
   * @member {Number} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * QoS Rule에 설정된 stats 수집 여부 설정값(yes, no 둘 중 하나의 값)
   * @member {module:model/RuleInfo.StatsEnum} stats
   */
  exports.prototype['stats'] = undefined;
  /**
   * @member {module:model/RuleInfo.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/QosRuleInfoMeterBands>} meter_bands
   */
  exports.prototype['meter_bands'] = undefined;


  /**
   * Allowed values for the <code>stats</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatsEnum = {
    /**
     * value: "yes"
     * @const
     */
    "yes": "yes",
    /**
     * value: "no"
     * @const
     */
    "no": "no"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "kbps"
     * @const
     */
    "kbps": "kbps",
    /**
     * value: "bbps"
     * @const
     */
    "bbps": "bbps"  };


  return exports;
}));


