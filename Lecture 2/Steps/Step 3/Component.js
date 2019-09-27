sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
 ], function (UIComponent, JSONModel) {
    "use strict";
    return UIComponent.extend("courses.Component", {
       metadata : {
          manifest: 'json'            
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             recipient : {
                name : "darknes, my old friend"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);
 
 
       }
    });
 });