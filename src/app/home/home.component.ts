import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductComponent } from '../product/product.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedCategory = 'all';

  onCategorySelected(category: string): void {
    if (this.selectedCategory === category) {
      this.selectedCategory = 'all';
    } else {
      this.selectedCategory = category;
    }
  }
}