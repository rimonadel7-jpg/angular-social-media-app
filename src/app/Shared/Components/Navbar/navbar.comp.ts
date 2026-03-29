import { FlowbiteSRV } from './../../../Core/Services/Flowbite/flowbite.srv';
import { Component, inject, input, Input } from '@angular/core';
import { initFlowbite } from 'flowbite/lib/esm/components';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { AuthSRV } from '../../../Core/Services/Auth/auth.srv';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.comp.html',
  styleUrl: './navbar.comp.css',
})
export class NavbarComp {
// private readonly router=inject(Router)
private readonly authsrv=inject(AuthSRV)

  constructor(private FlowbiteSRV: FlowbiteSRV) {}

  ngOnInit(): void {
    this.FlowbiteSRV.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }

  @Input() isLoggedIn:boolean=true;

  logOut(){
    // console.log('logout workinggg');
  this.authsrv.logOut()
  }
}

