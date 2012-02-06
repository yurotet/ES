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
			'<div class="item-panel active">',
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
		
		var tpl = ['<div class="action-panel deactive x-layout-box-inner x-layout-box">'].concat(templates).concat(['</div>']);		
		return tpl;
	},
	
	onItemSwipe: function(list, index, node) {
		var el = Ext.get(node);
		var itemEl = el.down('.item-panel');
		var actionEl = el.down('.action-panel');
		
		/**
		 * The list item body should either have item panel
		 * or action panel displayed, therefore, we swipe to
		 * toggle visibility of the two panels.
		 */
		var toggleCfg = {};
		toggleCfg.animStyle = 'slide';

		if (actionEl.hasCls('deactive')) {
			toggleCfg.dismissEl = itemEl;
			toggleCfg.showEl = actionEl;
			toggleCfg.direction = 'left';
		}
		else if (itemEl.hasCls('deactive')) {			
			toggleCfg.dismissEl = actionEl;
			toggleCfg.showEl = itemEl;
			toggleCfg.direction = 'right';
		}

		// TODO:: we might need to reset all other list items 
		// to show item information

		this.togglePanelVisibility(toggleCfg);		
	},

	//@private
	// use slide animination 
	togglePanelVisibility: function(config) {
		config = config || {};
				
		var showEl = config.showEl,
			dismissEl = config.dismissEl,
			animStyle = config.animStyle,
			direction = config.direction;

		if (showEl && dismissEl) {				
			Ext.Anim.run(dismissEl, animStyle, {
				direction: direction,
				out: true,
				scope: this,
				after: function() {
					showEl.removeCls('deactive');
					showEl.addCls('active');
					dismissEl.removeCls('active');
					dismissEl.addCls('deactive');
				}
			});	
		}
	},

	onItemTap: function(item, index, e) {
		var tappedEl = e.getTarget('.action-item');
		console.log(tappedEl);
		//TDOO:: dispathc the serice heer
	}
});

Ext.reg('itemList', zialer.views.ItemList);