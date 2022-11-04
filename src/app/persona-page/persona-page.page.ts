import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PersonaPage } from '../model/PersonaPage';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-persona-page',
  templateUrl: './persona-page.page.html',
  styleUrls: ['./persona-page.page.scss'],
})
export class PersonaPagePage implements OnInit {

  constructor(private _http: PersonasService, private router:Router, private alertController: AlertController) { }

  personaSave: PersonaPage[]=[]
  personas: any[]=[]

  Telements: number; // Total elemntos
  Nelement: number; // Numero elemntos en pagina
  Tpages: number;  // Total de paginas
  Npage: number = 1;  // Numero actual de pagina

  hidden:number = 1;
  hidden2:number = 0;

  Paginas(id: number){
    id = this.Npage
    console.log("Contador parametro: ",id);
    
    this._http.personaPage(id).subscribe( (res) => {
      setTimeout(() => {
      let {content, totalElements, numberOfElements, totalPages, pageable} = res
      //Recorro contenido de las personas
      content.forEach(item => {
        this.personas.push(item)
      });
      this.personaSave.push({content, totalElements, numberOfElements, totalPages, pageable})
      return this.Telements = res.totalElements, this.Nelement = res.numberOfElements, this.Tpages = res.totalPages, this.Npage = res.pageable.pageNumber+2, this.hidden = 0, this.hidden2 = 1
    }, 1000);
    }, async (err) => { console.log(err);
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Servidor Apagado',
        message: 'El servidor no esta disponible!',
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }

  loadData(event) {
    console.log("Numero actual de pagina: ",this.Npage);

    setTimeout(() => {
      console.log('Done');
      this.hidden = 1;
      this.Paginas(this.Npage)
      event.target.complete();

      if(this.personas.length == this.Telements){
      event.target.disabled = true;
      return this.hidden = 0
      }
    }, 500);
  }

  delete(id: number) {
    this._http.deletePerson(id).subscribe(() => { 
      //proceso
     }, async (err) => { 
      console.log('Error: ', err);
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
      window.location.assign('/persona-page');
      // this.router.
    });
  }

  redirect(){
    this.router.navigate(['/persona-register'])
  }

  ngOnInit() {
    this.Paginas(0);
  }

}
