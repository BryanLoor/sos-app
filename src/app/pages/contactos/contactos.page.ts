import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }
  nuevoNombre: string = "";
  nuevoTelefono: string = "";

  contactoSeleccionado: { nombre: string, telefono: string };

  contactos = [
    { nombre: "Juan Velez", telefono: "0981570592" },
    { nombre: "Jesus Contreras", telefono: "0981570592" },
    { nombre: "Johan Vasquez", telefono: "0981570592" },
    { nombre: "Maria Luisa", telefono: "0981570592" },
    { nombre: "Mario Lopez", telefono: "0981570592" },
    { nombre: "Bryan Loor", telefono: "0981570592" },
    { nombre: "Melanie Mendez", telefono: "0981570592" },
    { nombre: "Jose Veloz", telefono: "0981570592" },
    { nombre: "Maria Yepez", telefono: "0981570592" }
  ]

  ngOnInit() {
  }

  async presentarModal(modal) {
    await modal.present();
  }

  eliminarContacto(contacto) {
    
    this.toastCtrl.create({
      duration: 3000,
      message: "Contacto eliminado con éxito!",
      position: 'bottom',
      cssClass: "toastSucces"
    }).then(t => {
      this.alertCtrl.create({
        message: "Está seguro de eliminar este contacto",
        cssClass: "alertWarning",
        buttons: [
          {
            text: 'Si',
            handler: () => {
              this.contactos = this.removeItemFromArr(this.contactos, contacto)
              t.present()
            }
          },
          {
            text: 'No',
            handler: () => {
              return
            }
          }
        ]

      }).then(a => {
        a.present()
      })

    })
  }


  agregarContacto(modal) {

    if (this.nuevoNombre && this.nuevoTelefono) {
      const nuevo = {
        nombre: this.nuevoNombre,
        telefono: this.nuevoTelefono
      }
      this.contactos.push(nuevo)
      this.toastCtrl.create({
        duration: 3000,
        message: "Contacto agregado con éxito!",
        position: 'bottom',
        cssClass: "toastSucces"

      }).then(t => t.present())

      modal.dismiss()
    } else {
      this.toastCtrl.create({
        duration: 3000,
        message: "Rellene los campos",
        position: 'bottom',
        cssClass: "toastError"

      }).then(t => t.present())

    }

  }

  editarContacto(modal, nombre, telefono) {
    const contactoActualizado = {
      nombre: nombre,
      telefono: telefono
    }
    let index: number = this.contactos.indexOf(this.contactos.find(
      n => n.nombre == this.contactoSeleccionado.nombre,
      t => t.telefono == this.contactoSeleccionado.telefono
    ));
    if (nombre && telefono) {
      this.contactos[index] = contactoActualizado
      this.toastCtrl.create({
        duration: 3000,
        message: "Contacto actualizado con éxito!",
        position: 'bottom',
        cssClass: "toastSucces"

      }).then(t => t.present())
      modal.dismiss()
    } else {
      this.toastCtrl.create({
        duration: 3000,
        message: "Rellene los campos",
        position: 'bottom',
        cssClass: "toastError"

      }).then(t => t.present())

    }

  }

  removeItemFromArr = (arr, item) => {
    return arr.filter(e => e !== item);
  };
  seleccionado(seleccionado) {
    this.contactoSeleccionado = seleccionado
  }

}

