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
    instance = new PrismNbapi.MulticastInfoPhyint();
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

  describe('MulticastInfoPhyint', function() {
    it('should create an instance of MulticastInfoPhyint', function() {
      // uncomment below and update the code to test MulticastInfoPhyint
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be.a(PrismNbapi.MulticastInfoPhyint);
    });

    it('should have the property ifname (base name: "ifname")', function() {
      // uncomment below and update the code to test the property ifname
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property drPriority (base name: "dr_priority")', function() {
      // uncomment below and update the code to test the property drPriority
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property ttlThreshold (base name: "ttl_threshold")', function() {
      // uncomment below and update the code to test the property ttlThreshold
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property metric (base name: "metric")', function() {
      // uncomment below and update the code to test the property metric
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property altnet (base name: "altnet")', function() {
      // uncomment below and update the code to test the property altnet
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new PrismNbapi.MulticastInfoPhyint();
      //expect(instance).to.be();
    });

  });

}));
