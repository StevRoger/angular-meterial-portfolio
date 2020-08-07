import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = {};
  @Output() valueEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickView(id: any) {
    this.valueEmitter.emit(id);
  }

}
