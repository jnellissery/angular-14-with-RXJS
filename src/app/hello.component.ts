import { Component, Input , OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <button (click)='showuser()'>Users</button>`,
  styles: [`h1 { font-family: Lato; }`],
  standalone:true
})
export class HelloComponent implements OnInit  {
name:string;
constructor(private router:Router){}
ngOnInit(): void {
  this.name = 'Angular ' + VERSION.major;
}
showuser(){
  this.router.navigate(['users'])
    }
}
