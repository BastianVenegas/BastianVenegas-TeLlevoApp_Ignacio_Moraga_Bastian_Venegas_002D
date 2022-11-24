import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.page.html',
  styleUrls: ['./quienes.page.scss'],
})
export class QuienesPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
