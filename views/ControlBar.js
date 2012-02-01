/**
 * Control bar is used to display applicaiotn logo on the left, and
 * all other key functions as tab buttons on the right.
 */
zialer.views.ControlBar = Ext.extend(Ext.TabPanel,{
	layout:'fit',
	id:'controlBar',	
	ui:'plain',
	

	initComponent:function(){
		Ext.apply(this, {			
			items:[
				{
					iconCls: 'arrow_up'
				},
				{xtype:'spacer'},
				{text:'sodsf'},
				{iconCls: 'refresh'}
			]
		});

		zialer.views.ControlBar.superclass.initComponent.apply(this,arguments);
	}	
});

Ext.reg('controlBar',zialer.views.ControlBar);
	

	