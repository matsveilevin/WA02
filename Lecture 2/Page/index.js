sap.ui.getCore().attachInit(function () {
    new sap.m.Shell({
        app: new sap.ui.core.ComponentContainer({
            height: "100%",
            name: "leverx.wa.lecture2"
        })
    }).placeAt("content");
});