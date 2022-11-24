import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AutoService, Auto } from 'src/app/services/auto.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  


  formularioRegistro: FormGroup;
  newAuto: Auto = <Auto>{};


  constructor(
              private menuController: MenuController,
              private registroService: AutoService,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb:FormBuilder) { 
                this.formularioRegistro = this.fb.group({
                  'modelo': new FormControl("", Validators.required),
                  'patente': new FormControl("",Validators.required),
                  'capacidad' : new FormControl("", Validators.required),
                  'direccion' : new FormControl("", Validators.required),
                  'tarifa' : new FormControl("", Validators.required)
                })
              }
  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  async CrearAuto(){
    var form= this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe completar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    this.newAuto.modelo = form.modelo,
    this.newAuto.patente = form.patente,
    this.newAuto.capacidad = form.capacidad,
    this.newAuto.direccion = form.direccion,
    this.newAuto.tarifa = form.tarifa,
    this.registroService.addDatos(this.newAuto).then(dato => {
      this.newAuto = <Auto>{};
      this.showToast('¡Datos agregados!');
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }

}
