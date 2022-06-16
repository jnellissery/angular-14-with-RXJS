import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsers } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class UserComponent implements OnInit {
  user$: Observable<IUsers[]>;
  constructor(private router: Router, private usersvc: UserService) {}

  ngOnInit() {
    if (!this.usersvc.user.value.length) {
      console.log(this.usersvc.user.value.length);
      this.user$ = this.usersvc.getusers();
      this.user$.subscribe((x) => {
        this.usersvc.user.next(x);
      });
    } else {
      console.log(this.usersvc.user.value.length);
      this.user$ = this.usersvc.user.asObservable();
    }
  }
  showedetails(selectedrow: IUsers) {
    setTimeout(() => {
      this.router.navigate(['adduser']);
    }, 500);
    this.usersvc.selecteduserbehaviour = selectedrow;
  }
}
