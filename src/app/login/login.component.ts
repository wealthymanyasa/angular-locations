import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


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

  constructor(private formBuilder: FormBuilder, private router: Router) {
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

    if (this.loginForm.valid && pwd === password?.toString()) {

      this.router.navigate(['/home']);
      //console.log('redirect')
    } else {
      this.router.navigate(['/login']);

    }


  }
}

