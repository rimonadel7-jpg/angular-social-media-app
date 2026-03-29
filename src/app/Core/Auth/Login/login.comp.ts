import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AuthSRV } from '../../Services/Auth/auth.srv';
import { HttpClient } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.comp.html',
  styleUrl: './login.comp.css',
})
export class LoginComp {

  private readonly authSRV = inject(AuthSRV)
  private readonly router = inject(Router)
  private readonly fb = inject(FormBuilder)

  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required]),
  // })

loginForm: FormGroup=this.fb.group({
email:[null,([Validators.required, Validators.email])],
password:[null,([Validators.required])]
})

  errorMsg: string = ''
  successMsg: string = ''
  isLoading: boolean = false

  signIn() {
    if (this.loginForm.valid) {

      this.isLoading = true

      this.authSRV.signIn(this.loginForm.value).subscribe({
        next: (res) => {
          // console.log(res);

          // show loading spinner
          this.isLoading = false

          // HIDE ERR MESSAGE
          this.errorMsg=''

          // handle success msg
          this.successMsg = res.message

          // programing navigate to login
          // this.router.navigate(['/login'])


          // save token
          localStorage.setItem('access-token',res.data.token)

          // if success => navigate to home
          setTimeout(() => this.router.navigate(['/home']), 5000)

        },
        error: (err) => {
          // console.log(err);

          // show loading spinner
          this.isLoading = false
          // HIDE SUCESS MESSAGE 
                    this.successMsg = ''


          //handle success msg
          // this.errorMsg = err.error.message.includes('password')
          this.errorMsg = err.error.message
          


        },

        complete: () => {

        }

      }
      )

    }
    else {
      this.loginForm.markAllAsTouched
    }
  }
}


