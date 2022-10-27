import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DatosService, Usuario } from 'src/app/services/datos.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private registroService: DatosService,
              private alertController: AlertController,
              private toastController: ToastController,
              private fb:FormBuilder) { 
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.required),
                  'correo': new FormControl("", Validators.required),
                  'contraseña' : new FormControl("", Validators.required),
                  'repetirContraseña' : new FormControl("", Validators.required)
                });
              }

  ngOnInit() {
  }

  async CrearUsuario(){
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
    this.newUsuario.nombre = form.nombre,
    this.newUsuario.correo = form.correo,
    this.newUsuario.contraseña = form.contraseña,
    this.newUsuario.repetirContraseña = form.repetirContraseña,
    this.registroService.addDatos(this.newUsuario).then(dato => {
      this.newUsuario = <Usuario>{};
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
