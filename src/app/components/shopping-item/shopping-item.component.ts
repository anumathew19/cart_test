import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingItem } from './shopping-item';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() item: ShoppingItem;
  @Output() onRemove = new EventEmitter<never>();
  
 
  constructor() { }

  ngOnInit(): void {
  }
  remove() {
    this.onRemove.emit();
  }
}
