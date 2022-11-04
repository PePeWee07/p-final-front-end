import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../model/Persona';
import { PersonasService } from '../services/personas.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-persona-update',
  templateUrl: './persona-update.page.html',
  styleUrls: ['./persona-update.page.scss'],
})
export class PersonaUpdatePage implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private _personaService:PersonasService, private router:Router,  private alertController: AlertController) { }

  persona: Persona = new Persona();
  personaSave: Persona[] = [];

  profileId:number; //cap Id Persona
  newFoto: string = "";

  personID(){
    this.profileId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    console.log(this.profileId);
    
    this._personaService.getPersonId(this.profileId).subscribe( (res:Persona) => {      
      let { nombre, apellido, interes, comentario, foto } = res
      this.newFoto = res.foto
      this.personaSave.push({  apellido, nombre, interes, comentario, foto });
      // this.personaSave.push(res)
    }, (err) => {
      console.log("Error: ", err);
    }
    )
  }
  cargar(p:Persona){
    this.persona = p
  }

  actualizar(){
    this.profileId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this._personaService.actualizar(this.persona, this.profileId).subscribe(()=>{
      this.personaSave.push(this.persona) 
      console.log(this.persona);
    }, async (err) => {
      console.log("Error: ", err);
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Ocurrio un error',
        message: 'El servidor no esta disponible!',
        buttons: ['OK']
      });
  
      await alert.present();
    }, async () => {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Actualización Exitosa',
        message: 'Se actualizo una persona!',
        buttons: ['OK']
      });
  
      await alert.present();
      this.router.navigateByUrl('/persona', { skipLocationChange: true })
    }) 
  }
  ngOnInit() {
    this.personID();
  }

}
