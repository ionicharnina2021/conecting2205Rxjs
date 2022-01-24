import { StudentService } from './service/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './interface/student';
import { Observable,map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// C:\DAM 20-21\Acceso A Datos\08 Aplicaciones WEB\03 API REST\Teoria base\cors15 como backend
export class AppComponent implements OnInit{
  // title = 'conecting2205';
  // lista!: Promise<Student>;
  // letrero=false;
  // students=[];
  // appState$!: Observable<Student>;
  // title = 'conecting2205';
  // lista!: Promise<Student>;
  // letrero=false;
  // students=[];
  // otra= this.studentService.students$;
  // appState$!: Observable<Student>;
  otra$!: Observable<Student[]>;
  constructor(public studentService:StudentService){
   
  }
  ngOnInit(): void {
    this.otra$=this.studentService.students$;
    // this.otra$.subscribe();
  }
    // this.appState$=this.studentService.students$.pipe(
    //   map(response=>{
    //     return {data:response}
    //   })
    // )
    // let nueva=this.otra.pipe((a)=>{return a})
    // console.log("la nueva ",nueva)
    // nueva.forEach(a=>console.log(a))
    // this.studentService.students$
    // .pipe(map(response=>{return response}
    // ));
  // }
  // public getStudents(){
  //   this.lista=this.studentService.getStudents();
  //   this.letrero=true;
  //   this.lista.then((a)=>{
  //     console.log("estoy en getStudents "+a)
  //   })
  // }
  // public visible():boolean{
  //   return !this.lista&&this.letrero;
  // }
}
