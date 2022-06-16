import './polyfills';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './app/hello.component';
import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserguardGuard } from './userguard.guard';
import { UserResolveService } from './user-resolve.service';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.route').then((m) => m.routes),
    title: 'users',
  },
  {
    path: 'adduser',
    loadComponent: () =>
      import('./app/adduser/adduser.component').then((x) => x.AdduserComponent),
    title: 'Add user',
    canActivate: [UserguardGuard],
    resolve: { userresolve: UserResolveService },
    providers: [UserguardGuard,UserResolveService],
  },
  {
    path: '',
    redirectTo: '/hello',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    
    importProvidersFrom(
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      UserService,

      RouterModule.forRoot(routes, { useHash: true })
    ),
    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in main ts');
      },
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
