/**
 * @class zialer.views.ItemList
 * @extends Ext.list
 *
 * The list shows all items retrevied from server based on geo search or collection
 * search which is sorted by geo distance by default. The body of the item contains
 * summary and price information for the promoted item, and user is able to swip on 
 * the item to slide in action panel to do more things around the that item.
 * 
 */
zialer.views.ItemList = Ext.extend(Ext.List, {
	itemTpl: [
		'<div>{query}</div>'
	],

	emptyText: '<p class="list-no-item">no item to display</p>',

	activeCls: 'list-item-active',
	pressedCls: 'list-item-pressed',

	cls: 'itemList',
	selectedItemCls: "list-item-selected",

	

	initComponent: function() {
		Ext.apply(this, {
			store: new Ext.data.JsonStore({
				fields: [
					{name: 'query', type: 'string'}
				],
				data: [
					{query: '1'},
					{query: '2'},
					{query: '3'},
					{query: '4'},
					{query: '1'},
					{query: '2'},
					{query: '3'},
					{query: '4'},
					{query: '1'},
					{query: '2'},
					{query: '3'},
					{query: '4'},
					{query: '8'},
					{query: '2'},
					{query: '3'},
					{query: '4'},					
				]
			})
		});

		zialer.views.ItemList.superclass.initComponent.apply(this,arguments);

		this.on({
			scope: this,
			itemswipe: this.onItemSwipe
		})
	},

	onItemSwipe: function(list, index, node) {
		console.log('swiped on ' + index);
	},

	onItemTap: function(item, index, e) {
		console.log('tapped on ' + index);
	}
});

Ext.reg('itemList', zialer.views.ItemList);