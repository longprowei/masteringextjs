Ext.define('Packt.Application', {
    name: 'Packt',

    extend: 'Ext.app.Application',
    
    requires: [
        'Packt.view.Login'
    ],

    views: [
    ],

    controllers: [
        'Login'
    ],

    stores: [
        // TODO: add stores here
    ],

    init: function() {
        splashscreen = Ext.getBody().mask('Loading application','splashscreen');
        splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    },

    launch: function() {
        Ext.tip.QuickTipManager.init();
        var task = new Ext.util.DelayedTask(function() {
            splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            splashscreen.next().fadeOut({
                duration: 1000,
                remove: true,
                listeners: {
                    afteranimate: function(e1, startTime, eOpts) {
                        Ext.widget('login');
                    }
                }
            });

        });
        task.delay(2000);
    }
});
