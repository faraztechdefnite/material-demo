import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}
