import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DatosService, Usuario } from 'src/app/services/datos.service';
import { Platform, ToastController, IonList} from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: Usuario[] = [];
  constructor(private storageService: DatosService,
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
    this.storageService.getUsuarios().then(usuario=>{
      this.usuario=usuario;
    });
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
