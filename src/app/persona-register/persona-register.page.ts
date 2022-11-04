import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Persona } from '../model/Persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-persona-register',
  templateUrl: './persona-register.page.html',
  styleUrls: ['./persona-register.page.scss'],
})
export class PersonaRegisterPage implements OnInit {

  constructor(private _personaService: PersonasService,  private alertController: AlertController) { }

  persona: Persona = new Persona();
  personaSave: Persona[] = [];


  async guardar() {
    if(this.persona.nombre === null || this.persona.apellido === null || this.persona.interes === null ||
      this.persona.comentario === null || this.persona.foto === null){
        alert("Campos vacios")
        return;
    }else{
      this._personaService.register(this.persona).subscribe(
        () => {
          this.personaSave.push(this.persona)
          this.persona = new Persona()
        }, (err) => {
          console.log(err);
        }, async () => {
          // alert("Se Elmino la Perona con id:"+id)
          const alert = await this.alertController.create({
            header: 'Alerta',
            subHeader: 'Guardado Exitoso',
            message: 'Se guardo una persona!',
            buttons: ['OK']
          });
      
          await alert.present();
      })
    }
  }

  fotoDefault(){
    this.persona.foto = "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
  }

  ngOnInit() {
  }

}
