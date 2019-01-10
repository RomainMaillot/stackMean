import { Component, OnInit } from '@angular/core';
import { NavModel } from "../_models/nav.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public myNav: Array<NavModel>

  constructor() { 
    this.myNav = [
      {
        content: `Home`,
        href: `/`,
        isActive: true
      },
      {
        content: `About`,
        href: `/about`,
        isActive: false
      },
      {
        content: `Profile`,
        href: `/me`,
        isActive: false
      }
    ]
  }


  // equal DOMContentLoaded
  ngOnInit() {
  }

}
