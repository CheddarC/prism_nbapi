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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PrismNbapi);
  }
}(this, function(expect, PrismNbapi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PrismNbapi.MulticastInfoSptThreshold();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MulticastInfoSptThreshold', function() {
    it('should create an instance of MulticastInfoSptThreshold', function() {
      // uncomment below and update the code to test MulticastInfoSptThreshold
      //var instane = new PrismNbapi.MulticastInfoSptThreshold();
      //expect(instance).to.be.a(PrismNbapi.MulticastInfoSptThreshold);
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instane = new PrismNbapi.MulticastInfoSptThreshold();
      //expect(instance).to.be();
    });

    it('should have the property packets (base name: "packets")', function() {
      // uncomment below and update the code to test the property packets
      //var instane = new PrismNbapi.MulticastInfoSptThreshold();
      //expect(instance).to.be();
    });

    it('should have the property interval (base name: "interval")', function() {
      // uncomment below and update the code to test the property interval
      //var instane = new PrismNbapi.MulticastInfoSptThreshold();
      //expect(instance).to.be();
    });

  });

}));
