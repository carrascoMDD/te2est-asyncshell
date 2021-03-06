'use strict';

/*
 platform-nodejs-request-test.js
 Created 201409212117
 */

/*
 ***************************************************************************

 Copyright 2014 2015 2016 Antonio Carrasco Valero
 te2est asyncshell written in Javascript http://www.te2est.org http://www.asyncshell.org

Licensed under the EUPL, Version 1.1 only (the "Licence");
You may not use this work except in compliance with the
Licence.
You may obtain a copy of the Licence at:
https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
Unless required by applicable law or agreed to in
writing, software distributed under the Licence is
distributed on an "AS IS" basis,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
See the Licence for the specific language governing
permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 */


(function () {

    var aMod_definer = function( theM_httprequestgenerictest,
                                 theM_httprequest) {


        var ModuleName     = "platform-nodejs-request-test";
        var ModulePackages = "infrasvcs-test/httprequest/platforms";
        var ModuleFullName = ModulePackages + "/" + ModuleName;


        if( !( typeof gfLOGMODULELOADS == "undefined") && ( typeof gfLOGMODULELOADS == "function")) { gfLOGMODULELOADS(ModuleFullName);}








        var pgInitWithModuleConstants = function( theToInit) {

            if( !theToInit) {
            }
        };


        var ModuleConstants = {};
        pgInitWithModuleConstants( ModuleConstants);




        var pgInitFromModuleConstants = function( theToInit) {
            if( !theToInit) {
                return;
            }

            for( var aGlobalName in ModuleConstants) {
                if( ModuleConstants.hasOwnProperty( aGlobalName)) {
                    theToInit[ aGlobalName] = ModuleConstants[ aGlobalName];
                }
            }
        };













        var aHttpRequestTest_Prototype = (function() {

            var aPrototype = new theM_httprequestgenerictest.HttpRequestGenericTest_SuperPrototypeConstructor();

            pgInitFromModuleConstants( aPrototype);


            aPrototype._v_SuperPrototype = theM_httprequestgenerictest.HttpRequestGenericTest_Prototype;


            aPrototype._v_Type = "HttpRequestTest";
            aPrototype._v_Module = null;







            var _pInit = function( theTitle, theRequestSpecsPath) {

                this._pInit_HttpRequestTest( theTitle, theRequestSpecsPath);
            };
            if( _pInit){}/* CQT */
            aPrototype._pInit = _pInit;






            var _pInit_HttpRequestTest = function( theTitle, theRequestSpecsPath) {

                /* Delegate on super prototype initialization */
                aPrototype._v_SuperPrototype._pInit_HttpRequestGenericTest.apply( this, [ theTitle, theRequestSpecsPath]);

                this._v_Prototype = aPrototype;
                this._v_Type      = aPrototype._v_Type;
                this._v_Module    = aPrototype._v_Module;

            };
            if( _pInit_HttpRequestTest){}/* CQT */
            aPrototype._pInit_HttpRequestTest = _pInit_HttpRequestTest;










            var pInvokeRequest = function( theMethod, theURL, theRequestData, theRequestVerbCallback) {

                if( !theRequestVerbCallback) {
                    return;
                }

                if( !theMethod) {
                    theRequestVerbCallback( "pInvokeRequest !theMethod");
                    return;
                }

                if( !theURL) {
                    theRequestVerbCallback( "pInvokeRequest !theURL");
                    return;
                }

                if( !theRequestData) {
                    theRequestVerbCallback( "pInvokeRequest !theRequestData");
                    return;
                }


                if( theMethod == "get") {
                    theM_httprequest.pHttpRequest_get( theURL, theRequestData, theRequestVerbCallback);
                }
                else {
                    if( theMethod == "post") {
                        theM_httprequest.pHttpRequest_post( theURL, theRequestData, theRequestVerbCallback);
                    }
                    else {
                        theCallback( "!( theMethod == 'get') && !( theMethod == 'post')");
                    }
                }
            };
            if( pInvokeRequest){}/* CQT */
            aPrototype.pInvokeRequest = pInvokeRequest;









            var pF_HttpRequestTest = function( theCallback) {
                this.pF_HttpRequestGenericTest( theCallback);
            };
            if( pF_HttpRequestTest){}/* CQT */
            aPrototype.pF_HttpRequestTest = pF_HttpRequestTest;





            return aPrototype;

        })();




        var HttpRequestTest_Constructor = function( theTitle, theRequestSpecsOrPath) {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httprequestgenerictest.HttpRequestGenericTest_Prototype;

            this._v_Prototype = null;
            this._v_Type      = null;
            this._v_Module    = null;

            this._pInit_HttpRequestTest( theTitle, theRequestSpecsOrPath);
        };
        HttpRequestTest_Constructor.prototype = aHttpRequestTest_Prototype;





        var HttpRequestTest_SuperPrototypeConstructor = function() {

            /* Keep handy reference to super-prototype for super method invocation */
            this._v_SuperPrototype = theM_httprequestgenerictest.HttpRequestGenericTest_Prototype;

            this._v_Prototype = aHttpRequestTest_Prototype;
            this._v_Type = null;
            this._v_Module    = null;
        };
        HttpRequestTest_SuperPrototypeConstructor.prototype = aHttpRequestTest_Prototype;






        var aModule = {
            "HttpRequestTest_Prototype": aHttpRequestTest_Prototype,
            "HttpRequestTest_Constructor": HttpRequestTest_Constructor,
            "HttpRequestTest_SuperPrototypeConstructor": HttpRequestTest_SuperPrototypeConstructor
        };
        pgInitFromModuleConstants( aModule);
        aModule.ModuleName     = ModuleName;
        aModule.ModulePackages = ModulePackages;
        aModule.ModuleFullName = ModuleFullName;

        aHttpRequestTest_Prototype._v_Module = aModule;


        return aModule;
    };





    // Node.js
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = (function() {

            var aM_httprequestgenerictest    = require('./httprequest-generic-test');
            var aM_httprequest  = require('../../infrasvcs/httprequest/httprequest');

            return aMod_definer(
                aM_httprequestgenerictest,
                aM_httprequest
            );
        })();
    }
    // AMD / RequireJS
    else if (typeof define !== 'undefined' && define.amd) {
        define([
            "./httprequest-generic-test",
            "../../infrasvcs/httprequest/httprequest"
        ], function (
            theM_httprequestgenerictest,
            theM_httprequest
            ) {
            return aMod_definer(
                theM_httprequestgenerictest,
                theM_httprequest
            );
        });
    }


}());