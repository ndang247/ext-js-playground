Ext.define("UCMApp.view.scan.ScanView", {
  extend: "Ext.Container",
  xtype: "scanview",
  layout: "vbox",
  width: 500,

  items: [
    {
      xtype: "button",
      iconCls: "x-fa fa-camera",
      text: "Large",
      scale: "large",
      iconAlign: "right",
    },
  ],
});
