import { FormularioService } from './../../services/formulario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder, private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      fecha: [''],
      sexo: ['1']
    });
  }

  onSubmit() {
    this.formularioService.saveFormulario(this.formulario.value).subscribe((x) => console.log(x));
    this.formulario.reset();
  }

}
