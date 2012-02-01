zialer.views.Entry = Ext.extend(Ext.Panel, {
	id:'entry',
	layout:'card',
	fullscreen:true,

	initComponent:function() {
		Ext.apply(this,{
			dockedItems: [
			{
				dock:'top',
				xtype:'controlBar',
			}]
		});

		zialer.views.Entry.superclass.initComponent.apply(this,arguments);
	}
});