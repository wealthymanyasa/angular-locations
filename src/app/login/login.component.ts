import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  // email = "";
  // password = "";
  // errorMsg = "";

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth:AuthService
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })
  }

  ngOnInit(): void {

  }
  onSubmit() {
    const pwd = "P@ssw0rd123";
    const password = this.loginForm.get('password')?.value
    const email = this.loginForm.get('email')?.value

    if (this.loginForm.valid && pwd === password?.toString()) {

      this.router.navigate(['/home']);

    }

    const contains_matogen  = email.includes("matogen.com")
   // console.log(contains_matogen)

    contains_matogen && this.auth.is_staff.next(contains_matogen)



  }
}

