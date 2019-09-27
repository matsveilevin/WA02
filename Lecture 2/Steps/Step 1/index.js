sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "courses.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});
	/*
	Without promises:
	var oView = sap.ui.view({
		id: "idMain",
		viewName: "courses.view.App",
		type: sap.ui.core.mvc.ViewType.XML
		});
		oView.placeAt("content");
	*/

});