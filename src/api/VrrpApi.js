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
    define(['ApiClient', 'model/ErrorMessage', 'model/VrrpInfo', 'model/VrrpNameObject', 'model/VrrpObject', 'model/VrrpUpdateInfo', 'model/VrrpsObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorMessage'), require('../model/VrrpInfo'), require('../model/VrrpNameObject'), require('../model/VrrpObject'), require('../model/VrrpUpdateInfo'), require('../model/VrrpsObject'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.VrrpApi = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.ErrorMessage, root.PrismNbapi.VrrpInfo, root.PrismNbapi.VrrpNameObject, root.PrismNbapi.VrrpObject, root.PrismNbapi.VrrpUpdateInfo, root.PrismNbapi.VrrpsObject);
  }
}(this, function(ApiClient, ErrorMessage, VrrpInfo, VrrpNameObject, VrrpObject, VrrpUpdateInfo, VrrpsObject) {
  'use strict';

  /**
   * Vrrp service.
   * @module api/VrrpApi
   * @version 1.0.0
   */

  /**
   * Constructs a new VrrpApi. 
   * @alias module:api/VrrpApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createVRRP operation.
     * @callback module:api/VrrpApi~createVRRPCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create VRRP
     * @param {module:model/VrrpInfo} vrrpInfo VRRP 정보.
     * @param {module:api/VrrpApi~createVRRPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpInfo}
     */
    this.createVRRP = function(vrrpInfo, callback) {
      var postBody = vrrpInfo;

      // verify the required parameter 'vrrpInfo' is set
      if (vrrpInfo === undefined || vrrpInfo === null) {
        throw new Error("Missing the required parameter 'vrrpInfo' when calling createVRRP");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VrrpInfo;

      return this.apiClient.callApi(
        '/prism/vrrp/instance', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createVrrpInTenant operation.
     * @callback module:api/VrrpApi~createVrrpInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create VRRP in tenant
     * @param {String} tenantName 테넌트의 이름
     * @param {module:model/VrrpInfo} vrrpInfo 인터페이스 정보.
     * @param {module:api/VrrpApi~createVrrpInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpInfo}
     */
    this.createVrrpInTenant = function(tenantName, vrrpInfo, callback) {
      var postBody = vrrpInfo;

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling createVrrpInTenant");
      }

      // verify the required parameter 'vrrpInfo' is set
      if (vrrpInfo === undefined || vrrpInfo === null) {
        throw new Error("Missing the required parameter 'vrrpInfo' when calling createVrrpInTenant");
      }


      var pathParams = {
        'tenant_name': tenantName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VrrpInfo;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/tenant/{tenant_name}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVrrpInTenant operation.
     * @callback module:api/VrrpApi~deleteVrrpInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpNameObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete VRRP in tenant
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {String} tenantName 테넌트의 이름
     * @param {module:api/VrrpApi~deleteVrrpInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpNameObject}
     */
    this.deleteVrrpInTenant = function(vrrpName, tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling deleteVrrpInTenant");
      }

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling deleteVrrpInTenant");
      }


      var pathParams = {
        'vrrp_name': vrrpName,
        'tenant_name': tenantName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpNameObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVrrpo operation.
     * @callback module:api/VrrpApi~deleteVrrpoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpNameObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete VRRP
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {module:api/VrrpApi~deleteVrrpoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpNameObject}
     */
    this.deleteVrrpo = function(vrrpName, callback) {
      var postBody = null;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling deleteVrrpo");
      }


      var pathParams = {
        'vrrp_name': vrrpName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpNameObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllVrrpInfo operation.
     * @callback module:api/VrrpApi~getAllVrrpInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpsObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all VRRP information
     * @param {module:api/VrrpApi~getAllVrrpInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpsObject}
     */
    this.getAllVrrpInfo = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpsObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/all', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllVrrpInfoInTenant operation.
     * @callback module:api/VrrpApi~getAllVrrpInfoInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpsObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all VRRP information in tenant
     * @param {String} tenantName 테넌트의 이름
     * @param {module:api/VrrpApi~getAllVrrpInfoInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpsObject}
     */
    this.getAllVrrpInfoInTenant = function(tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getAllVrrpInfoInTenant");
      }


      var pathParams = {
        'tenant_name': tenantName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpsObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/all/tenant/{tenant_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOneVrrpInfo operation.
     * @callback module:api/VrrpApi~getOneVrrpInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one VRRP information
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {module:api/VrrpApi~getOneVrrpInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpObject}
     */
    this.getOneVrrpInfo = function(vrrpName, callback) {
      var postBody = null;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling getOneVrrpInfo");
      }


      var pathParams = {
        'vrrp_name': vrrpName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOneVrrpInfoInTenant operation.
     * @callback module:api/VrrpApi~getOneVrrpInfoInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one VRRP information in tenant
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {String} tenantName 테넌트의 이름
     * @param {module:api/VrrpApi~getOneVrrpInfoInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpObject}
     */
    this.getOneVrrpInfoInTenant = function(vrrpName, tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling getOneVrrpInfoInTenant");
      }

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getOneVrrpInfoInTenant");
      }


      var pathParams = {
        'vrrp_name': vrrpName,
        'tenant_name': tenantName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpObject;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVrrpInTenant operation.
     * @callback module:api/VrrpApi~updateVrrpInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpUpdateInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update VRRP in tenant
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {String} tenantName 테넌트의 이름
     * @param {module:model/VrrpUpdateInfo} vrrpUpdateInfo VRRP 정보.
     * @param {module:api/VrrpApi~updateVrrpInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpUpdateInfo}
     */
    this.updateVrrpInTenant = function(vrrpName, tenantName, vrrpUpdateInfo, callback) {
      var postBody = vrrpUpdateInfo;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling updateVrrpInTenant");
      }

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling updateVrrpInTenant");
      }

      // verify the required parameter 'vrrpUpdateInfo' is set
      if (vrrpUpdateInfo === undefined || vrrpUpdateInfo === null) {
        throw new Error("Missing the required parameter 'vrrpUpdateInfo' when calling updateVrrpInTenant");
      }


      var pathParams = {
        'vrrp_name': vrrpName,
        'tenant_name': tenantName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpUpdateInfo;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}/tenant/{tenant_name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVrrpo operation.
     * @callback module:api/VrrpApi~updateVrrpoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VrrpUpdateInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update VRRP
     * @param {String} vrrpName VRRP 인스턴스 이름
     * @param {module:model/VrrpUpdateInfo} vrrpUpdateInfo VRRP 정보.
     * @param {module:api/VrrpApi~updateVrrpoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VrrpUpdateInfo}
     */
    this.updateVrrpo = function(vrrpName, vrrpUpdateInfo, callback) {
      var postBody = vrrpUpdateInfo;

      // verify the required parameter 'vrrpName' is set
      if (vrrpName === undefined || vrrpName === null) {
        throw new Error("Missing the required parameter 'vrrpName' when calling updateVrrpo");
      }

      // verify the required parameter 'vrrpUpdateInfo' is set
      if (vrrpUpdateInfo === undefined || vrrpUpdateInfo === null) {
        throw new Error("Missing the required parameter 'vrrpUpdateInfo' when calling updateVrrpo");
      }


      var pathParams = {
        'vrrp_name': vrrpName
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = VrrpUpdateInfo;

      return this.apiClient.callApi(
        '/prism/vrrp/instance/{vrrp_name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
