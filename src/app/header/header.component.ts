import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private router: Router) {}

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }

  onHeaderClicked() {
    this.router.navigate(['/']);
  }
}