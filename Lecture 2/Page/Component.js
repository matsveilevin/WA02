sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("leverx.wa.lecture2.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
            UIComponent.prototype.init.apply(this, arguments);
		}
	});

});