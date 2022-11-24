import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AutoService, Auto } from 'src/app/services/auto.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  auto: Auto[] = [];
  constructor(private storageService: AutoService,
              private menuController: MenuController,
              private plt: Platform, 
              private toastController: ToastController) {
                this.plt.ready().then(()=>{
                this.loadDatos();
              });
            }  

  ngOnInit() {
  }

  loadDatos(){
    this.storageService.getAutos().then(auto=>{
      this.auto=auto;
    });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
