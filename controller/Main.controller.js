sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'manisha/model/models'
], function (Controller, Model) {
    'use strict';
    return Controller.extend("manisha.controller.Main", {
        // onClick: function(){
        //     alert("welcome in sapui5");

        // }
        onInit: function () {
            //create Resouce model
            var oModelResource = Model.createResourceModel();
            //set Resouce model
            sap.ui.getCore().setModel(oModelResource, "i18n");
            
            //create JSON model which contains data of myData.json file 
            var oModel = new Model.createJSONModel();
            //set model
            sap.ui.getCore().setModel(oModel);

            // var myForm = this.getView().byId("myForm");
            // myForm.bindElement('/orderDetail/0');
        },

        elementBinding : function(oEvent){
            var sPath= oEvent.getParameter("rowContext").getPath();
            var oForm = this.getView().byId("myForm");
            oForm.bindElement(sPath);
        }

    });
});

// sap.ui.define([
//     'sap/ui/core/mvc/Controller'
// ], function(Controller) {
//     'use strict';
//     return Controller.extend
// });