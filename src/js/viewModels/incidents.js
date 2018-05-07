/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojmodule-element-utils', 'ojs/ojbutton'],
  function (oj, ko, $, app, moduleUtils) {

    function IncidentsViewModel() {
      var self = this;

      //Touch-id Lib: https://github.com/EddyVerbruggen/cordova-plugin-touch-id
      self.fingerPrintBtn = function (event) {

        window.plugins.touchid.isAvailable(
          function (type) { alert(type) }, // type returned to success callback: 'face' on iPhone X, 'touch' on other devices
          function (msg) { alert('not available, message: ' + msg) } // error handler: no TouchID available
        );

        window.plugins.touchid.verifyFingerprint(
          'Scan your fingerprint please', // this will be shown in the native scanner popup
          function (msg) { alert('ok: ' + msg) }, // success handler: fingerprint accepted
          function (msg) { alert('not ok: ' + JSON.stringify(msg)) } // error handler with errorcode and localised reason
        );

      }

      // Header Config
      self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
      moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
        self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
      })

      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
  }
);
