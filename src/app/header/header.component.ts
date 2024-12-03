import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}