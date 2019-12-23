import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//const express = require('express')
//const bodyParser = require('body-parser')
// const nodemailer = require('nodemailer');

// const app = express()

ReactDOM.render(<App />, document.getElementById('root'));

(function(){
var checkEnvironment = function() {
        // should return "dev", "stg", or "prod"
        if ( document.location.href.indexOf('.dev.') > -1 ) {
            return 'dev';
        }
        if ( document.location.href.indexOf('.stg.') > -1 || document.location.href.indexOf('.stage.') > -1 ) {
            return 'stg';
        }
        return 'prod';
    },

    gtmConfig = {
        container: "GTM-P528B3", // GTM Container ID
        prdstring: "&gtm_auth=tfAzqo1rYDLgYhmTnSjPqw&gtm_preview=env-130", // string to set into modifier in this is prod
        devstring: "&gtm_auth=WiJyA7zv1sohHCWSZ3mF1Q&gtm_preview=env-8", // string to set into modifier in this is dev
        stgstring: "&gtm_auth=FOuAsPhG-4kWeLk6Kq5AzQ&gtm_preview=env-7", // string to set into modifier in this is staging
        dataLayer: "", //override dataLayer name
        modifier: "", //string passed in for dev/stage environments
        env: checkEnvironment() // set 'env' to indicate dev or stg environments
    },
    pageDataConfig = {
        event: "pageDataReady",
        application: {
            name: "help", // set the sourceApp here
            environment: gtmConfig.env

        }
        //Add any other data here
    }

gtmConfig.modifier = gtmConfig.prdstring;

if ( gtmConfig.env === "dev" ) {
    gtmConfig.modifier = gtmConfig.devstring;
} else if ( gtmConfig.env === "stg" ) {
    gtmConfig.modifier = gtmConfig.stgstring;
};

(function(w,d,s,l,i,k){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl+k+"&gtm_cookies_win=x";f.parentNode.insertBefore(j,f);
})(window,document,'script',gtmConfig.dataLayer||'dataLayer',gtmConfig.container,gtmConfig.modifier);
// End Google Tag Manager

// Request Data from TAGX API and push to GTM
(function(pageData,dataLayerName,env){
    var config = {
        "host" :  env && env === "prod" ? "a.nytimes.com" : "a.dev.nytimes.com",
        "referrer" : encodeURIComponent(document.referrer),
        "assetUrl" : encodeURIComponent((function getCanonical(){
                        var canon = document.querySelector('link[rel=canonical]');
                        if  ( canon ) {
  	                        return canon.href;
                        } else {
  	                        return document.location.href;
                        }
                     })())
    },
    request = new XMLHttpRequest();
    request.withCredentials = true;
    request.open("GET","https://"+config.host+"/svc/nyt/data-layer?sourceApp="+pageData.application.name+"&referrer="+config.referrer+"&assetUrl="+config.assetUrl, true);
    request.onload = function() {
        var userData = JSON.parse(request.responseText);
        userData.event = "userDataReady";
        window[dataLayerName].push(userData);
        window[dataLayerName].push(pageData);
    };
    request.addEventListener("error",function() {
        // There was a connection error of some sort
        window[dataLayerName].push(pageData);
    });
    request.send();
})(pageDataConfig,gtmConfig.dataLayer||'dataLayer',gtmConfig.env);
// End Request Data from TAGX API and push to GTM

})();
