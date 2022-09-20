import { Component, OnInit } from '@angular/core';
import { SMS} from '@ionic-native/sms/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private sms : SMS, private androidPermissions: AndroidPermissions) {
    
   }

  ngOnInit() {
    
  }



  requestPermission(){
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS && this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(
      result => console.log('Permisos concedidos',result),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS && this.androidPermissions.PERMISSION.READ_PHONE_STATE)
    );
  }



  async enviar_sos(){
    console.log("Sms enviado")
    const options={ android: { intent: 'INTENT' } }
    if(this.sms) {
      this.sms.send("+593981570592", "Mensaje de prueba",options)
      .then(res=>{
        console.log('Message sent successfully');
        console.log("S.O.S enviado!")
      })
      .catch(e=> console.log(e))  
  } 

  //this.sms.send('0981570592','hola mundo')


  /*try {
    await this.sms.send('0981570592','Mensaje de prueba').then(res=>{
      alert("Mensaje enviado con exito")
    })



  } catch (error) {
    alert("Error"+ error)
  }*/
    
    /*this.sms.hasPermission().then(res=>{
      if(res){
        alert("Tiene permiso")
        if(this.sms){
          console.log("entro a funcion sosss")
          this.sms.send('0981570592','Mensaje de prueba')

        
        }else {alert("error sms")}

      }else{
        alert("No tiene permiso, NADAA")
      }
    })*/
    
  }
} 
