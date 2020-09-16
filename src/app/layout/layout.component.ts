import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  items = ['first', 'second'];
  item: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addingItem(newitem: string){
    this.items.unshift(newitem);
  }

}
