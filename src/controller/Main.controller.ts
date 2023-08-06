import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import UI5Event from "sap/ui/base/Event";
import Input from "sap/m/Input";
import SearchField from "sap/m/SearchField";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";


/**
 * @namespace com.vysk.tsmaster_detail.controller
 */
export default class Main extends BaseController {
	
	public onNavigatetoDetail(oEvent:UI5Event): void {
		const Id = oEvent.getSource().getProperty('title')
		// const nav=`detail?ID=${Id}&Don=SRK`;//{?query}
		// this.getRouter().navTo(nav);
		this.getRouter().navTo("detail", {
			id: Id
		  });
	}

	public onSearch(oEvent:UI5Event): void {
		const oSearch = oEvent.getSource() as Input;
		const oFilter =new Filter('ProductName',FilterOperator.Contains,oSearch.getValue())
		const oList = this.getView().byId('prodList') as ListBinding;
		var oBinding = oList.getBinding("items");
		oBinding.filter(oFilter);
		
	}
}
