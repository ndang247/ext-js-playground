Ext.define("UniversalClassicModernApp.view.samplegrid.SamplegridView", {
  xtype: "samplegridview",
  cls: "samplegridview",
  controller: { type: "samplegridviewcontroller" },
  viewModel: { type: "samplegridviewmodel" },
  requires: ["Ext.Action"],
  extend: "Ext.grid.Panel",

  defaultActionType: "button",
  actions: {
    addNew: {
      text: "Add New",
      disabled: false,
      handler: "handleAddNew", // see Controller
    },
    edit: {
      text: "Sell stock",
      disabled: true,
      handler: "handleEdit",
    },
  },

  tbar: [
    // Actions can be converted into Buttons.
    "@addNew",
    "@edit",
  ],

  columns: [
    {
      text: "Company",
      flex: 1,
      sortable: false,
    },
    {
      text: "Price",
      width: 100,
      sortable: true,
      formatter: "usMoney",
    },
    {
      text: "Change",
      width: 110,
      sortable: true,
      renderer: "renderChange",
    },
    {
      text: "% Change",
      width: 120,
      sortable: true,
      renderer: "renderPctChange",
    },
    {
      text: "Last Updated",
      width: 150,
      sortable: true,
      formatter: 'date("m/d/Y")',
    },
  ],
});
