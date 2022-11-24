import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DatosService, Usuario } from '../../services/datos.service';
import {
FormGroup,
FormControl,
Validators,
FormBuilder
} from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  formularioLogout : FormGroup;
  usuarios : Usuario[] = [];

    constructor( private alertController: AlertController,
    private navController: NavController,
    private datosService: DatosService,
    private fb: FormBuilder) { }
    
    ngOnInit() {
    }
    
    async Salir(){
    const a = 1;
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio');
    if (a==1){
    this.alertMsg();
    }
    }
    
    async alertMsg(){
    const alert = await this.alertController.create({
    header: 'Sesión Cerrada!',
    message: 'Sesión Cerrada',
    buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }
}