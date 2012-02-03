/**
 * @class zialer.views.ItemActiosn
 * @extends Ext.Toolbar
 *
 * This panel shows available actions against a particular item:
 * 	1. share on twitter, facebook, by email etc.
 * 	2. add to collections
 *	3. show suggested items for the category that the item belongs to
 *	4. details info of the business that runs the promoted item
 * 
 * once the user tapped on the action button, the router will dispatch
 * to the corresponding views for that action
 */
zialer.views.ItemActions = Ext.extend(Ext.Toolbar, {
	
});

Ext.reg('itemActions',zialer.views.ItemActions);