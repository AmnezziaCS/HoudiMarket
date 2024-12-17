import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, FormsModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
    public stackoverflowUrl: string = 'https://stackoverflow.com/';
    public facebookUrl: string = 'https://www.facebook.com/';
    public googleUrl: string = 'https://plus.google.com/';
    public linkedinUrl: string = 'https://www.linkedin.com/';

    public errorMessage: string | null = null;
    public successMessage: string | null = null;

    constructor() {}

    ngOnInit() {}

    onSubmit(form: any) {
        if (!form.valid) {
            this.errorMessage =
                "Il faut une addresse email pour s'inscrire à la newsletter";
            this.successMessage = null;
            console.log('Invalid form');
        } else {
            this.errorMessage = null;
            this.successMessage = 'Inscrit à la newsletter';
            console.log(`Valid form with email: ${form.value.email}`);
        }
    }
}
