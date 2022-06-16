import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class UserguardGuard implements CanActivate {
  constructor(private svc:UserService){
  }
  async canActivate() {
    if (this.svc.isLogged()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); (4)
      return false;
    }

  }
     
 
}