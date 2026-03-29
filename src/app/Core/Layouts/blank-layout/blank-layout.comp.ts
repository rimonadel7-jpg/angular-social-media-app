import { Component } from '@angular/core';
import { NavbarComp } from "../../../Shared/Components/Navbar/navbar.comp";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-blank-layout',
  imports: [NavbarComp, RouterOutlet],
  templateUrl: './blank-layout.comp.html',
  styleUrl: './blank-layout.comp.css',
})
export class BlankLayoutComp {

}
