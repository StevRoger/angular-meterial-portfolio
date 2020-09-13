import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() item: any = {};
  @Output() actionsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doActions(action: string) {
    this.actionsEmitter.emit(action);
  }

}
