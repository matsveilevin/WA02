/*global QUnit*/

sap.ui.define([
	"WA02/L3/controller/StartPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("StartPage Controller");

	QUnit.test("I should test the StartPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});