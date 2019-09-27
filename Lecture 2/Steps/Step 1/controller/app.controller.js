sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","courses/otherScript/index"], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("courses.controller.App", {
       onShowHello : function () {
          MessageToast.show("Fatality");
          Logging();
       }
    });
 });