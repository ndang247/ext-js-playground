Ext.define(
  "UniversalClassicModernApp.view.samplegrid.SamplegridViewController",
  {
    extend: "Ext.app.ViewController",
    alias: "controller.samplegridviewcontroller",

    handleAddNew: function () {
      console.log("handleAddNew");
      // Create a new form and show it in a window.
      // The form will be created by the view model.
      var form = {
        extend: "Ext.form.Panel",

        title: "Add New Address",

        frame: true,
        resizable: true,
        width: 600,
        minWidth: 600,
        minHeight: 350,
        bodyPadding: 5,
        layout: "column",

        floating: true,
        closable: true,
        draggable: true,

        defaults: {
          layout: "form",
          xtype: "container",
          defaultType: "textfield",
          style: "width: 50%",
        },

        items: [
          {
            items: [
              { fieldLabel: "First Name" },
              { fieldLabel: "Last Name" },
              { fieldLabel: "Phone Number" },
              { fieldLabel: "Email Address" },
            ],
          },
          {
            items: [
              { fieldLabel: "Street Address 1" },
              { fieldLabel: "Street Address 2" },
              { fieldLabel: "City, State" },
              { fieldLabel: "ZIP code" },
            ],
          },
        ],

        buttons: [{ text: "OK" }, { text: "Cancel" }],
      };

      // var win = Ext.create("Ext.window.Window", {
      //   title: "Add New",
      //   items: [form],
      // });
      // win.show();
      var dialog = Ext.create("Ext.form.Panel", form);
      dialog.show();
    },
  }
);
