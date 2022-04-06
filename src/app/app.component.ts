import { Component } from '@angular/core';
import { Usuario } from './entidades/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'my-first-project';
  miusuario: Usuario;
  
  constructor(){
  
    this.miusuario=new Usuario
  
  }
  
  mostrar():void{
   // this.title="es hora de mate cocido";
   // console.info("titulo",this.title);
    console.info("usuario: ",this.miusuario);
    //alert(this.miusuario.nombre +  " - " + this.miusuario.clave );
    //alert(this.miusuario);
    // console.log(this.miusuario);
    
    
  }



}
