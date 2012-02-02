/**
 * Entry point of the application.
 */
Ext.regApplication({
    name         : "zialer",
    

    // for now, we have 2 functional path are supported, one is
    // showing items for places resourced at /items/search, and 
    // the other one is to show user's favorate items resourced
    // at /items/collections. 
    defaultUrl   : 'items/search',
    defaultTarget: "viewport",
    
    // TODO:: add apliction icon later
    // icon: 'resources/images/icon.png',
    // glossOnIcon: false,

    // TODO:: add phone and tablet icons later
    // phoneStartupScreen: 'resources/images/phone_startup.png',
    // tabletStartupScreen: 'resources/images/tablet_startup.png',
       
    launch: function() {
        this.viewport = new zialer.views.Viewport({
            // configurations of the app.
            application: this,
        });
    }
});