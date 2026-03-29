import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSRV } from '../../Services/Auth/auth.srv';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { error } from 'console';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.comp.html',
  styleUrl: './register.comp.css',
})
export class RegisterComp {

  private readonly authSRV = inject(AuthSRV)
  private readonly router = inject(Router)



  RegisterForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
  },

    { validators: this.confirmPassword }
  )

  errorMsg: string = ''
  successMsg: string = ''
  isLoading: boolean = false

  signUp() {
    if (this.RegisterForm.valid) {

      this.isLoading = true

      this.authSRV.signup(this.RegisterForm.value).subscribe({
        next: (res) => {
          console.log(res);
          //handle hide loading spinner 
          this.isLoading = false
          // handle success msg
          this.successMsg = res.message
          // programing navigate to login
          // this.router.navigate(['/login'])
          setTimeout(() => this.router.navigate(['/login']), 5000)

        },
        error: (err) => {
          console.log(err);
          // btn spinner
          this.isLoading = false
          // handle error msg
          this.errorMsg = err.error.message

        },

        complete: () => {

        }

      }
      )

    }
      else {
      this.RegisterForm.markAllAsTouched()
    }


  }


  confirmPassword(group: any) {
    let password = group.get('password')?.value
    let rePassword = group.get('rePassword')?.value
    if (password == rePassword) {
      return null
    }
    else {
      return { mismatch: true }
    }
  }
}
