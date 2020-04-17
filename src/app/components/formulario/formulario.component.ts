import { Formulario } from './../estudiante/formulario';
import { FormularioService } from './../../services/formulario.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formularioList: Array<Formulario> = new Array<Formulario>();
  displayedColumns = ['nombre', 'fecha_nacimiento', 'sexo'];
  dataSource: MatTableDataSource<Formulario> = new MatTableDataSource(this.formularioList);
  constructor(private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.formularioService.getFormularios().subscribe((data) => {
      if (data.formularios.length > 0) {
        let temp : Formulario;
        this.formularioList = new Array<Formulario>();
        data.formularios.forEach((element) => {
          temp = new Formulario();
          temp.nombre = element.nombre;
          temp.fecha_nacimiento = element.fecha_nacimiento;
          temp.sexo = element.sexo;
          this.formularioList.push(temp);
        });
        this.dataSource.data = this.formularioList;
      }
    });
  }

}
