import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../interface/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//el proyecto Spring es C:\DAM 20-21\Acceso A Datos\08 Aplicaciones WEB\02 Persistencia\Teoria Clase\cors15
export class StudentService {
  private readonly apiUrl = 'http://localhost:8080/students';
  private readonly studentList = '/list';
  constructor(protected http: HttpClient) {
  }

  //se convierte en asincrona, por eso ponemos el $
  public students$ = <Observable<Student[]>>(
    this.http.get<Student[]>(this.apiUrl + this.studentList)
  );
  
  //esto es el procedural aproach
  // async getStudents() {
  //     let lista: any;
  //     console.log('hola aqui empezando el metodo');
  //     await this.http.get(this.apiUrl + '/students/list').forEach((stud) => {
  //       // console.log(stud);
  //       console.log('hola estoy dentro del get');
  //       lista = stud;
  //     });
  //     console.log('hola estoy antes del retorno');
  //     return lista;
  //   }
}
