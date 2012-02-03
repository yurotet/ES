zialer.views.Viewport = Ext.extend(Ext.TabPanel, {
	id: 'viewport',
	layout: 'card',
	fullscreen: true,
	ui: 'plain',
	cardSwitchAnimation: false,

	onAdd: function(cmp, idx) {
		// intercept the requet of adding spacer component so the spacer
		// will not be added as the instance of xtype:tab.
		var cmpToInsert = (cmp instanceof Ext.Spacer)? {xtype: 'spacer'} : {
			xtype: 'tab',
			cls: cmp.tabCls || '',
			card: cmp
		};
		this.tabBar.insert(idx, cmpToInsert);
		this.tabBar.doLayout();
	},

	initComponent: function() {
		Ext.apply(this, {			
			items:[				
				{
					// TODO:: this needs to be replaced with logo image or text.
					title: (new Date()).getFullYear(),
					tabCls: 'logo-tab'
				},
				{
					xtype: 'spacer'
				},
				{
					// TODO:: this will be replaced with search icon
					title: 'serch',
					tabCls: 'search-tab',

					items: [
						{
							xtype: 'form',
							styleHtmlContent: true,

							listeners: {
								el: {
									scope: this,
									submit: this.onQuerySubmit
								}
							},

							dockedItems: {
								xtype: 'toolbar',
								ui: 'plain',
								dock: 'top',
								items: {
									xtype: 'searchfield',			                    
				                    name: 'query',
				                    itemId: 'newQueryField',
				                    placeHolder: 'zialer zialer...'
								}
							}
						},
						{ 							
							xtype: 'itemList'
							// TODO:: list ocnfigrations here
						}						
					]							
				},
				{
					// TDOO:: this will bed replaced with collection icon
					title: 'coll',
					tabCls: 'collection-tab'
				}
			]
		});

		zialer.views.Viewport.superclass.initComponent.apply(this,arguments);
	},

	onQuerySubmit: function() {
		console.log('query has submikited');
	} 
});