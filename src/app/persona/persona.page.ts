import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/Persona';
import { PersonasService } from '../services/personas.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.page.html',
  styleUrls: ['./persona.page.scss'],
})
export class PersonaPage implements OnInit {

  persona: Persona = new Persona();
  personaSave: Persona[] = [];
  personaIDget: Persona = null;
  hidden:number = 1;
  hidden2:number = 0;

  constructor(private _personaService: PersonasService, private router:Router, private alertController: AlertController) { }

  getPerson() {
    this._personaService.getPersona().subscribe(
      ( data: Persona[]) => {
        setTimeout(() => {
          this.personaSave = data;
          return this.hidden = 0, this.hidden2 = 1
        }, 1000);
      }
      , async (err) => {
        console.log(err);
        const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Servidor Apagado',
          message: 'El servidor no esta disponible!',
          buttons: ['OK']
        });
    
        await alert.present();
      })
  }

  redirect(){
    this.router.navigate(['/persona-register'])
  }

  delete(id: number) {
    this._personaService.deletePerson(id).subscribe(() => { 
      this.getPerson() 
    }, async (err) => { 
      console.log('Error: ', err) 
      const alert = await this.alertController.create({
          header: 'Alerta',
          subHeader: 'Ocurrio un error',
          message: 'El servidor no esta disponible!',
          buttons: ['OK']
        });
    
        await alert.present();
  }
    ,async () => {
      // alert("Se Elmino la Perona con id:"+id)
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Eliminado Exitosa',
        message: 'Se elimino una persona!',
        buttons: ['OK']
      });
  
      await alert.present();
    });
  }

  ngOnInit() {
    this.getPerson();
  }

}
