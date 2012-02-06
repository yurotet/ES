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

	emptyText: '<p class="list-no-item">no item to display</p>',

	activeCls: 'list-item-active',
	pressedCls: 'list-item-pressed',

	cls: 'itemList',
	selectedItemCls: "list-item-selected",

	initComponent: function() {
		var itemTpl = this.getItemTpl(),
			actionsTpl = this.getActionsTpl();

		this.itemTpl = itemTpl.concat(actionsTpl);		

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
					{query: '6'},
					{query: '8'}
				]
			})
		});

		zialer.views.ItemList.superclass.initComponent.apply(this,arguments);

		this.on({
			scope: this,
			itemswipe: this.onItemSwipe
		})
	},

	getItemTpl: function() {
		var tpl = [
			'<div class="item-panel">',
				'<div>{query}</div>',
			'</div>'
		];

		return tpl;
	},	

	// @private	
	getActionsTpl: function() {
		var actionCls = [
			'arrow_up',
			'arrow_down',
			'arrow_left',
			'arrow_right'
		]

		var templates = actionCls.map(function(cls) {
			return '<div class="action-item x-button x-button-plain">' +
					'<img class="x-icon-mask ' + cls + '"></img>' +
					'</div>';			
		});
		
		var tpl = ['<div class="action-panel x-layout-box-inner x-layout-box" style="display:none">'].concat(templates).concat(['</div>']);		
		return tpl;
	},
	
	onItemSwipe: function(list, index, node) {
		var el = Ext.get(node);
		var itemEl = el.down('.item-panel');
		var actionEl = el.down('.action-panel');

		Ext.Anim.run(actionEl, 'slide', {
			direction: 'left',
			scope: this,			 
			out: false,

			after: function() {	
				// actionEl.setStyle('display','block');			
				itemEl.hide();
				console.log('elent hided');
			}
		});

	},

	onItemTap: function(item, index, e) {
		console.log('tapped on ' + index);
	}
});

Ext.reg('itemList', zialer.views.ItemList);