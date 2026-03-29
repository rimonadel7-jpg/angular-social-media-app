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

 successMass: string = '';
  errorMass: string = '';
  isLoading: boolean = false;

  formLogin: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [ Validators.required]), },
  );


  sginIn() {
    if (this.formLogin.valid) {
      this.isLoading = true;

      this.authSRV.signIn(this.formLogin.value).subscribe({
        next: (res) => {
          if (res.success) {
            console.log(res);
            this.errorMass = '';
            this.successMass = res.message;
            this.isLoading = false;
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000);
            localStorage.setItem('token' , res.data.token)
          }
        },
        error: (err) => {
          console.log(err.error);
          this.successMass = '';
          this.errorMass = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

}


