/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define("SenchaGenerateAppCMDGeneratedApp.Application", {
  extend: "Ext.app.Application",

  name: "SenchaGenerateAppCMDGeneratedApp",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  launch: function () {
    const obj = null;
    console.log("launch");
    console.log(obj?.name);
    Ext?.Msg?.alert("SenchaGenerateAppCMDGeneratedApp.Application", "launch");
  },

  onAppUpdate: function () {
    Ext?.Msg?.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
