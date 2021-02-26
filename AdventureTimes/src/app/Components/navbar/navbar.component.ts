import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapsed: boolean;
  @Input() oc: boolean;

  constructor() { 
    this.isCollapsed = true,
    this.oc = false
  }

  ngOnInit(): void {
  }

}
