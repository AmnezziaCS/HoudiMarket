import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HoudiMarket';
  selectedCategory = 'all';

  onCategorySelected(category: string): void {
    if (this.selectedCategory === category) {
      this.selectedCategory = 'all';
    } else {
      this.selectedCategory = category;
    }
  }
}