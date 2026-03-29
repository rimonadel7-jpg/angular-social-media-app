import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthSRV } from '../../Services/Auth/auth.srv';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.comp.html',
  styleUrl: './register.comp.css',
})
export class RegisterComp {

  private readonly authSRV = inject(AuthSRV)
  private readonly router = inject(Router)

successMass: string = '';
  errorMass: string = '';
  isLoading: boolean = false;
  formRegister: FormGroup = new FormGroup({
    name: new FormControl(null, [ Validators.required,Validators.minLength(3),Validators.maxLength(20),]),
    username: new FormControl(null, [ Validators.required,Validators.minLength(3), Validators.maxLength(20),]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    dateOfBirth: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[#?!@$%^&*-]).{8,}$/),]),
    
    rePassword: new FormControl(null, [Validators.required]),
    },
    { validators: this.confirmPassword },
  );

  sginUp() {
    if (this.formRegister.valid) {
      this.isLoading = true;

      this.authSRV.signup(this.formRegister.value).subscribe({
        next: (res) => {
          if (res.success) {
            console.log(res);
            this.errorMass = '';
            this.successMass = res.message;
            this.isLoading = false;
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000);
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
      this.formRegister.markAllAsTouched();
    }
  }

  confirmPassword(group: any) {
    let passwordValue = group.get('password').value;
    let rePasswordValue = group.get('rePassword').value;

    if (passwordValue == rePasswordValue) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
}
