import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Auto{
  modelo : string;
  patente : string;
  capacidad : string;
  direccion : string;
  tarifa : string;
}

const AUTO_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  
  private _storage: Storage;
  newAuto: Auto = <Auto>{};

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
   }

   async addDatos(dato: Auto):Promise<any>{
    return this.storage.get(AUTO_KEY).then((datos : Auto[])=>{
      if(datos) {
        datos.push(dato);
        return this.storage.set(AUTO_KEY, datos);
      }else {
        return this.storage.set(AUTO_KEY, [dato]);
      }

      })
    }

    async getAutos(): Promise<Auto[]>{
      return this.storage.get(AUTO_KEY);
    }

    
   }
