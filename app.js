Ext.regApplication({
	name : "ES",
	defaultTarget : "viewport",

	launch : function() {
		this.viewport = new ES.ViewPort({
			application:this			
		});
	}
});

Ext.regModel('Place', {
	fields : [ {
		name : "place_image_url",
		type : "string"
	}, {
		name : "place_des",
		type : "string"
	}, {
		name : "place_new",
		type : "bool"
	}, {
		name : "due_date",
		type : "date",
		dateFormat : "c"
	} ]
});

// store model instances locally using localStorage
Ext.regStore('placesStore', {
	model : 'Place',
	autoLoad : true,
	sorters : [ {
		property : 'due_date',
		directiion : 'DESC'
	} ],

	proxy : {
		type : 'localstorage',
		id : 'place-store'
	},

	// mock data just for demostration purpose
	data : [ {
		place_new_url : 'do ti latere',
		place_des : 'place1',
		place_new : true,
		due_date : new Date(2011, 1, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place2',
		place_new : false,
		due_date : new Date(2011, 1, 5)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place3',
		place_new : false,
		due_date : new Date(2011, 2, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place4',
		place_new : false,
		due_date : new Date(2011, 3, 5)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place5',
		place_new : true,
		due_date : new Date(2011, 4, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place6',
		place_new : false,
		due_date : new Date(2011, 5, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place7',
		place_new : false,
		due_date : new Date(2011, 6, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place8',
		place_new : false,
		due_date : new Date(2011, 7, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place9',
		place_new : false,
		due_date : new Date(2011, 8, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place10',
		place_new : false,
		due_date : new Date(2011, 9, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place11',
		place_new : false,
		due_date : new Date(2011, 10, 3)
	}, {
		place_new_url : 'do ti latere',
		place_des : 'place12',
		place_new : false,
		due_date : new Date(2011, 11, 3)
	} ]
});

ES.views.PlacesList = Ext.extend(Ext.List, {
	id : 'placesList',
	emptyText : '<p class="place-list-empty">empty content</p>',
	disableSelection : true,
	store:'placesStore',
	
	plugins : [{
		ptype : 'listpaging',
		autoPaging : false
	}],
	
	itemTpl : new Ext.XTemplate([ '<span class="new_marker"></span>',
			'<img src="{place_image_url}"/>',
			'<div class="place-decription">{place_des}</div>"' ]),
	itemCls : 'place-item'
});

Ext.reg('placesList', ES.views.PlacesList);

ES.ViewPort= Ext.extend(Ext.TabPanel,{
	id:'viewport',
	fullscreen:true,
	ui:'dark',
	
	initComponent: function() {
		Ext.apply(this,{
			tabBar:{
				dock:'bottom',
				layout:{pack:'center'}
			},
						
			cardSwitchAnimation:{
				type:'slide',
				cover:true
			},
			
		    items: [{
		        title: 'Promotions',		        
		        xtype:'placesList',		        			        
		        iconCls: 'info',		        
		        badgeText: '10'
		    }, {
		        title: 'Favorites',
		        html: '<h1>Favorites Places</h1>',
		        iconCls: 'favorites'
		    }, 
		    {
		        title: 'Friends',
		        html: '<h1>Weibo activities</h1>',
		        iconCls: 'user',
		        badgeText: 'Jay just says:'
		    }]
		});
		
		ES.ViewPort.superclass.initComponent.apply(this, arguments);
	}	
});
