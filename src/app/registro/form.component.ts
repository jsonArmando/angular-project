import { Component, OnInit } from '@angular/core';
import {Registro} from './registro'
import {RegistroService} from './registro.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private registro: Registro = new Registro()
  private titulo:string = "Crear Registro"

  constructor(private registroService: RegistroService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarRegistro()
  }

  cargarRegistro(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
      this.registroService.getRegistros().subscribe( (registro) => this.registro = this.registro)
      }
    })
  }

  create(): void {
    this.registroService.create(this.registro)
      .subscribe(registro => {
        this.router.navigate(['/registros'])
        swal('Nuevo registro', `registro ${registro.nombreCalle} creado con éxito!`, 'success')
      }
      );
  }
  update():void{
    this.registroService.update(this.registro)
    .subscribe( registro => {
      this.router.navigate(['/registros'])
      swal('registro Actualizado', `registro ${registro.nombreCalle} actualizado con éxito!`, 'success')
    }

    )
  }

}
