zialer.views.Viewport = Ext.extend(Ext.TabPanel, {
	id: 'viewport',	
	fullscreen: true,
	ui: 'plain',
	cardSwitchAnimation: false,

	onAdd: function(cmp, idx) {
		// intercept the requet of adding spacer component so the spacer
		// will not be added as the instance of xtype:tab.
		var cmpToInsert = (cmp instanceof Ext.Spacer)? {xtype: 'spacer'} : {
			xtype: 'tab',
			cls: cmp.tabCls || 'item-tab',
			card: cmp
		};
		this.tabBar.insert(idx, cmpToInsert);
		this.tabBar.doLayout();
	},

	initComponent: function() {
		Ext.apply(this, {			
			items:[

				/**
				 * ========
				 * Logo tab
				 * ========
				 */			
				{
					// TODO:: this needs to be replaced with logo image or text.
					title: (new Date()).getFullYear(),
					tabCls: 'logo-tab'
				},
				
				// a spacer tab push all other functional tabs to the right.
				{
					xtype: 'spacer'
				},

				/**
				 * ==========
				 * Search tab
				 * ==========
				 */
				{
					// TODO:: this will be replaced with search icon
					title: 'serch',
					tabCls: 'search-tab',					
					layout: 'fit',							

					items: {
						xtype: 'itemList'
					},

					dockedItems: {
						dock: 'top',
						xtype: 'form',
						height: 40,
						baseCls: 'x-toolbar',
						cls: 'search-form',
						itemId: 'search-from',

						listeners: {
							el: {
								scope: this,
								submit: this.onQuerySubmit
							}
						},

						items: {
							xtype: 'searchfield',			                    
							name: 'query',
							itemId: 'newQueryField',
							placeHolder: 'zialer zialer...'
						}
					}
				},

				/**
				 * ==============
				 * Collection tab
				 * ==============
				 */
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