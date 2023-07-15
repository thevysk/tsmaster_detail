import BaseController from "./BaseController";

/**
 * @namespace com.vysk.ui5_ts_template.controller
 */
export default class App extends BaseController {
	public onInit(): void {
		// apply content density mode to root view
		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
	}
}
