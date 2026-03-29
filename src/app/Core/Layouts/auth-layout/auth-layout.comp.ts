import { Component } from '@angular/core';
import { NavbarComp } from "../../../Shared/Components/Navbar/navbar.comp";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-auth-layout',
  imports: [NavbarComp, RouterOutlet],
  templateUrl: './auth-layout.comp.html',
  styleUrl: './auth-layout.comp.css',
})
export class AuthLayoutComp {

}
