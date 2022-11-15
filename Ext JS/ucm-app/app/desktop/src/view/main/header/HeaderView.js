Ext.define("UCMApp.view.main.header.HeaderView", {
  extend: "Ext.toolbar.Toolbar",
  height: 50,
  xtype: "headerview",
  cls: "headerview",
  defaults: {
    handler: "onToolButtonClicked",
  },
  items: [
    {
      xtype: "button",
      reference: "navtoggle",
      handler: "onHeaderViewNavToggle",
      iconCls: "x-fa fa-navicon",
    },
    {
      xtype: "component",
      bind: { html: "{heading}" },
    },
    "->",
    "->",
    {
      name: "capture",
      iconCls: "x-fa fa-camera",
      tooltip: "screen shot",
      handler: "onCapture",
    },
    {
      reference: "detailtoggle",
      iconCls: "x-fa fa-arrow-left",
      tooltip: "show and hide detail view",
      handler: "onHeaderViewDetailToggle",
    },
  ],
});
