zialer.views.Viewport = Ext.extend(Ext.TabPanel, {
	id: 'viewport',
	layout: 'card',
	fullscreen: true,
	ui: 'plain',
	cardSwitchAnimation: false,

	onAdd : function(cmp, idx) {
		// intercept the requet of adding spacer component so the spacer
		// will not be added as the instance of xtype:tab.
		var cmpToInert = (cmp instanceof Ext.Spacer)? {xtype: 'spacer'}:{
			xtype: 'tab',
			cls: cmp.tabCls || '',
			card: cmp
		};
		this.tabBar.insert(idx, cmpToInert);
		this.tabBar.doLayout();
	},

	initComponent : function() {
		Ext.apply(this, {			
			items:[				
				{						
					tabCls: 'logo-tab'
				},
				{
					xtype: 'spacer'
				},
				{
					tabCls: 'search-tab',
					xtype: 'panel',
					ui: 'dark',
				},
				{
					tabCls: 'collection-tab'
				}
			]
		});

		zialer.views.Viewport.superclass.initComponent.apply(this,arguments);
	}
});