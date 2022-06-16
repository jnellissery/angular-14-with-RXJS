import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    providers: [ 
      {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in routes');
      },
      multi: true,
    }]
  },
];