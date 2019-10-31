import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Pagina2Page } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

	pagina2:any=Pagina2Page;
  	constructor(public navCtrl: NavController, public navParams: NavParams,
  				private menuCtrl:MenuController) {
  	}

	navegarPagina(){

		this.navCtrl.push(Pagina2Page);
	}

	mostratMenu(){
		this.menuCtrl.toggle()
	}

}
