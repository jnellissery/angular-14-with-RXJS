import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsers } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class AdduserComponent implements OnInit {
  fg: FormGroup;
  constructor(
    private fb: FormBuilder,
    private svc: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    let selectuser!: IUsers;

    selectuser = this.svc.selecteduser.value;
  
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required, Validators.maxLength(100)]],
    });
    this.fg.controls['title'].setValue(selectuser.title);
    this.fg.controls['body'].setValue(selectuser.body);
  }
  save() {
    this.svc.adduser(this.fg.value);
    this.router.navigate(['users']);
  }
}
