import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent implements OnInit {

  navItems: any;
  constructor() { }
  ngOnInit() {
    this.navItems = [
      {name: 'GridCard', route: '/gridcard'},
      {name: 'Datatable', route: '/datatable'},
      {name: 'Autocomplete', route: '/autocomplete'},
      {name: 'Button Toggle', route: '/button-toggle'},
    ];
  }
}
