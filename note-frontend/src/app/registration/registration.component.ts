import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css', '../style.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });
  hidePassword = true;
  message: string;

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get email() { return this.form.get('email'); }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.username.value);
    console.log(this.password.value);
    console.log(this.email.value);
    let username: string = this.username.value;
    let password: string = this.password.value;
    let emailAddress: string = this.email.value;
    this.authService.register({ username, password, emailAddress } as User);
    this.router.navigate(['/login']);
  }

  regClick = function () {
    this.router.navigateByUrl('/login');
  };

}
