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
    define(['ApiClient', 'model/ErrorMessage', 'model/InterfaceName', 'model/InterfaceObject', 'model/InterfacesBriefObject', 'model/InterfacesObject', 'model/PhysicalsObject', 'model/RouterInterface', 'model/TenantName', 'model/UpdateAddInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorMessage'), require('../model/InterfaceName'), require('../model/InterfaceObject'), require('../model/InterfacesBriefObject'), require('../model/InterfacesObject'), require('../model/PhysicalsObject'), require('../model/RouterInterface'), require('../model/TenantName'), require('../model/UpdateAddInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.PrismNbapi) {
      root.PrismNbapi = {};
    }
    root.PrismNbapi.InterfaceApi = factory(root.PrismNbapi.ApiClient, root.PrismNbapi.ErrorMessage, root.PrismNbapi.InterfaceName, root.PrismNbapi.InterfaceObject, root.PrismNbapi.InterfacesBriefObject, root.PrismNbapi.InterfacesObject, root.PrismNbapi.PhysicalsObject, root.PrismNbapi.RouterInterface, root.PrismNbapi.TenantName, root.PrismNbapi.UpdateAddInfo);
  }
}(this, function(ApiClient, ErrorMessage, InterfaceName, InterfaceObject, InterfacesBriefObject, InterfacesObject, PhysicalsObject, RouterInterface, TenantName, UpdateAddInfo) {
  'use strict';

  /**
   * Interface service.
   * @module api/InterfaceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new InterfaceApi. 
   * @alias module:api/InterfaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addRouterInterface operation.
     * @callback module:api/InterfaceApi~addRouterInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfaceName} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add router interface
     * 라우터 인터페이스 추가.
     * @param {module:model/RouterInterface} routerInterface 인터페이스 정보.
     * @param {module:api/InterfaceApi~addRouterInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfaceName}
     */
    this.addRouterInterface = function(routerInterface, callback) {
      var postBody = routerInterface;

      // verify the required parameter 'routerInterface' is set
      if (routerInterface === undefined || routerInterface === null) {
        throw new Error("Missing the required parameter 'routerInterface' when calling addRouterInterface");
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
      var returnType = InterfaceName;

      return this.apiClient.callApi(
        '/prism/interface', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the delRouterInterface operation.
     * @callback module:api/InterfaceApi~delRouterInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfaceName} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete router interface
     * 라우터 인터페이스 제거.
     * @param {String} interfaceName 삭제할 인터페이스 이름
     * @param {Object} opts Optional parameters
     * @param {module:model/TenantName} opts.tenantName 특정 테넌트 내의 인터페이스 제거 시 해당 테넌트의 이름.(Optional)
     * @param {module:api/InterfaceApi~delRouterInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfaceName}
     */
    this.delRouterInterface = function(interfaceName, opts, callback) {
      opts = opts || {};
      var postBody = opts['tenantName'];

      // verify the required parameter 'interfaceName' is set
      if (interfaceName === undefined || interfaceName === null) {
        throw new Error("Missing the required parameter 'interfaceName' when calling delRouterInterface");
      }


      var pathParams = {
        'interface_name': interfaceName
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
      var returnType = InterfaceName;

      return this.apiClient.callApi(
        '/prism/interface/{interface_name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPhyInterface operation.
     * @callback module:api/InterfaceApi~getAllPhyInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhysicalsObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 사용할 수 있는 모든 물리 인터페이스의 정보 조회.
     * @param {module:api/InterfaceApi~getAllPhyInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhysicalsObject}
     */
    this.getAllPhyInterface = function(callback) {
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
      var returnType = PhysicalsObject;

      return this.apiClient.callApi(
        '/prism/interface/physical', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPhyInterfaceDetail operation.
     * @callback module:api/InterfaceApi~getAllPhyInterfaceDetailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfacesObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 사용할 수 있는 모든 물리 인터페이스의 상세 정보 조회.
     * @param {module:api/InterfaceApi~getAllPhyInterfaceDetailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfacesObject}
     */
    this.getAllPhyInterfaceDetail = function(callback) {
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
      var returnType = InterfacesObject;

      return this.apiClient.callApi(
        '/prism/interface/all', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPhyInterfaceInTenant operation.
     * @callback module:api/InterfaceApi~getAllPhyInterfaceInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhysicalsObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all PRISM physical interface
     * 테넌트에서 사용할 수 있는 모든 물리 인터페이스의 정보 조회. (현재 사용할 수 있는 인터페이스만 조회됨) (사용할 수 있는 인터페이스가 없으면 아무것도 표시되지 않음)
     * @param {String} tenantName 테넌트 명
     * @param {module:api/InterfaceApi~getAllPhyInterfaceInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhysicalsObject}
     */
    this.getAllPhyInterfaceInTenant = function(tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getAllPhyInterfaceInTenant");
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
      var returnType = PhysicalsObject;

      return this.apiClient.callApi(
        '/prism/interface/physical/{tenant_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPrismInterfaceBrief operation.
     * @callback module:api/InterfaceApi~getAllPrismInterfaceBriefCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfacesBriefObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/InterfaceApi~getAllPrismInterfaceBriefCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfacesBriefObject}
     */
    this.getAllPrismInterfaceBrief = function(callback) {
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
      var returnType = InterfacesBriefObject;

      return this.apiClient.callApi(
        '/prism/interface/brief', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPrismInterfaceInTenant operation.
     * @callback module:api/InterfaceApi~getAllPrismInterfaceInTenantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfacesObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} tenantName 테넌트의 이름
     * @param {module:api/InterfaceApi~getAllPrismInterfaceInTenantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfacesObject}
     */
    this.getAllPrismInterfaceInTenant = function(tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getAllPrismInterfaceInTenant");
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
      var returnType = InterfacesObject;

      return this.apiClient.callApi(
        '/prism/interface/all/tenant/{tenant_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOnePrismInterface operation.
     * @callback module:api/InterfaceApi~getOnePrismInterfaceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfaceObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} interfaceName 인터페이스 이름
     * @param {String} tenantName 테넌트의 이름
     * @param {module:api/InterfaceApi~getOnePrismInterfaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfaceObject}
     */
    this.getOnePrismInterface = function(interfaceName, tenantName, callback) {
      var postBody = null;

      // verify the required parameter 'interfaceName' is set
      if (interfaceName === undefined || interfaceName === null) {
        throw new Error("Missing the required parameter 'interfaceName' when calling getOnePrismInterface");
      }

      // verify the required parameter 'tenantName' is set
      if (tenantName === undefined || tenantName === null) {
        throw new Error("Missing the required parameter 'tenantName' when calling getOnePrismInterface");
      }


      var pathParams = {
        'interface_name': interfaceName,
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
      var returnType = InterfaceObject;

      return this.apiClient.callApi(
        '/prism/interface/{interface_name}/tenant/{tenant_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePrismInterfaceAdd operation.
     * @callback module:api/InterfaceApi~updatePrismInterfaceAddCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfaceName} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} interfaceName 인터페이스 이름
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAddInfo} opts.updateAddInfo 업데이트 할 정보
     * @param {module:api/InterfaceApi~updatePrismInterfaceAddCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfaceName}
     */
    this.updatePrismInterfaceAdd = function(interfaceName, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateAddInfo'];

      // verify the required parameter 'interfaceName' is set
      if (interfaceName === undefined || interfaceName === null) {
        throw new Error("Missing the required parameter 'interfaceName' when calling updatePrismInterfaceAdd");
      }


      var pathParams = {
        'interface_name': interfaceName
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
      var returnType = InterfaceName;

      return this.apiClient.callApi(
        '/prism/interface/{interface_name}/add', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePrismInterfaceRemove operation.
     * @callback module:api/InterfaceApi~updatePrismInterfaceRemoveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InterfaceName} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} interfaceName 인터페이스 이름
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateAddInfo} opts.updateAddInfo 업데이트 할 정보
     * @param {module:api/InterfaceApi~updatePrismInterfaceRemoveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InterfaceName}
     */
    this.updatePrismInterfaceRemove = function(interfaceName, opts, callback) {
      opts = opts || {};
      var postBody = opts['updateAddInfo'];

      // verify the required parameter 'interfaceName' is set
      if (interfaceName === undefined || interfaceName === null) {
        throw new Error("Missing the required parameter 'interfaceName' when calling updatePrismInterfaceRemove");
      }


      var pathParams = {
        'interface_name': interfaceName
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
      var returnType = InterfaceName;

      return this.apiClient.callApi(
        '/prism/interface/{interface_name}/rem', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
