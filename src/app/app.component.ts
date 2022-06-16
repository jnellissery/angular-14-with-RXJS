import { Component, VERSION } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  imports:[HelloComponent, RouterModule],
  standalone:true
})
export class AppComponent  {
 
}
