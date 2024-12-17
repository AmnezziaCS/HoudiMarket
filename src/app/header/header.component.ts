import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [MatIcon],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
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

    onCartIconClicked() {
        this.router.navigate(['/cart']);
    }
}
