import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {ModalPage} from "../index.paginas";
@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

	constructor(public navCtrl: NavController, public navParams: NavParams,
				public modalCtrl: ModalController) {
  	}

  	activarPrincipal(){
  		this.navCtrl.parent.select(2);
  	}

  	mostrar_modal(){
  		let modal=this.modalCtrl.create(ModalPage,{nombre:"Fernando",edad:30});
  		modal.present();

      modal.onDidDismiss(parametros=>{
        if(parametros){
          console.log("data del modal");
          console.log(parametros);
        }else{
          console.log("se cerro el modal sin parametros");
        }
      });
  	}
}
