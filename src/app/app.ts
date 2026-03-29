import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComp } from "./Shared/Components/Navbar/navbar.comp";
import { RegisterComp } from "./Core/Auth/Register/register.comp";
import { LoginComp } from "./Core/Auth/Login/login.comp";
import { HomeComp } from "./Features/home/home.comp";
import { NgxSpinnerComponent } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComp, RegisterComp, LoginComp, HomeComp, NgxSpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Social-Media');
}
