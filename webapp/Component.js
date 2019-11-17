(function () {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("fiori.monitor.purchase.documents.PurchaseDocumentsOVP.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("fiori.monitor.purchase.documents.PurchaseDocumentsOVP.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());