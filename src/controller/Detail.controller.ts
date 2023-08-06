import JSONModel from "sap/ui/model/json/JSONModel";
import BusyIndicator from "sap/ui/core/BusyIndicator";
import BaseController from "./BaseController";

/**
 * @namespace com.vysk.tsmaster_detail.controller
 */
export default class Detail extends BaseController {

	
	public onInit(): void {
		this.getRouter().getRoute('detail').attachPatternMatched(this.onRouteMatched,this);
	}
	public async onRouteMatched(oEvent): void {
        BusyIndicator.show();
		const oModel = this.getModel('oData');
        const ID = oEvent.getParameter("arguments").id;
        try{
            const oPromProduct= await new Promise((resolve, reject) => {
            oModel.read('/Products('+ID+')',{
                    "urlParameters":"$expand=Supplier,Category,Order_Details",
                    success: (success: object)=>{
                        console.log(success)
                        resolve(success) ;
                        },
                    error:(error:object) => { 
                        console.log(error);
                        reject(error)
                    }
                });
            })
            this.getView().setModel(new JSONModel(),"Product")
            this.getView().getModel("Product").setProperty("/CurrentProd",oPromProduct);
            this.getView().getModel("Product").setProperty("/OrderDetails",oPromProduct.Order_Details.results);
            BusyIndicator.hide()
        } catch(e){
            BusyIndicator.hide()
        }
        
       

	}
	
}
