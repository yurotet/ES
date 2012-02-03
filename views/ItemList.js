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
	
});

Ext.reg('itemList', zialer.views.ItemList);