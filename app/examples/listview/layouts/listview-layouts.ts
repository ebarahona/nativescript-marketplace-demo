import model = require("./layouts-view-model");
import listViewModule = require("nativescript-telerik-ui/listview");

var viewModel = new model.ListViewLayoutsModel();
var listView;

export function onPageLoaded(args: any){
	var page = args.object;
	page.bindingContext = viewModel;
	listView = page.getViewById("list-view");
}

export function onLinearLayoutTap(args: any){
	var linearLayout = new listViewModule.ListViewLinearLayout();
	listView.listViewLayout = linearLayout; 
}

export function onGridLayoutTap(args: any){
	var gridLayout = new listViewModule.ListViewGridLayout();
	gridLayout.spanCount = 2;
	gridLayout.itemHeight="250";
	listView.listViewLayout = gridLayout; 
}