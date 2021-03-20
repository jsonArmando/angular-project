import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-registros',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  registros: Registro[];

  constructor(private registroService: RegistroService) { }

  ngOnInit() {
    this.registroService.getRegistros().subscribe(
      registros => this.registros =registros
    )
  }

  delete(registro: Registro): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al registro ${registro.numeroCalle} ${registro.id}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.registroService.delete(registro.id).subscribe(
          response => {
            this.registros = this.registros.filter(cli => cli !== registro)
            swal(
              'registro Eliminado!',
              `registro ${registro.nombreCalle} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
