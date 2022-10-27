import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'information-circle-outline',
      name: 'Quienes Somos',
      redirecTo: '/quienes'
    },   
    {
      icon: 'log-in-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'log-in-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },  
    {
      icon: 'log-in-outline',
      name: 'Logout',
      redirecTo: '/logout'
    },
    {
      icon: 'eye-outline',
      name: 'Noticias',
      redirecTo:'/noticias',
    },         
  ];
}

