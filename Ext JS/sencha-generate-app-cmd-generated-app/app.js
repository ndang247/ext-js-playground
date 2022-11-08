/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'SenchaGenerateAppCMDGeneratedApp.Application',

    name: 'SenchaGenerateAppCMDGeneratedApp',

    requires: [
        // This will automatically load all classes in the SenchaGenerateAppCMDGeneratedApp namespace
        // so that application classes do not need to require each other.
        'SenchaGenerateAppCMDGeneratedApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'SenchaGenerateAppCMDGeneratedApp.view.main.Main'
});
