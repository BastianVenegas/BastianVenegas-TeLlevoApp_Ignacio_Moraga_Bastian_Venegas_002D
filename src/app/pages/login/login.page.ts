import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DatosService, Usuario } from '../../services/datos.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'
import { Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = [];

  constructor( private alertController: AlertController,
               private navController: NavController,
               private datosService: DatosService,
               private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("", Validators.required),
                  'contraseña': new FormControl("", Validators.required),
                  })
                }            

  ngOnInit() {
  }

  async Ingresar (){
    var f = this.formularioLogin.value;
    var a = 0;
    this.datosService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
          return null;
      }

      for (let obj of this.usuarios){
        if (obj.correo == f.correo && obj.contraseña==f.contraseña){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          this.navController.navigateRoot('inicio');
        }
      }
      console.log(a);
      if (a==0){
        this.alertMsg();
      }
    });
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: '¡Los datos ingresados no son correctos!',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

}