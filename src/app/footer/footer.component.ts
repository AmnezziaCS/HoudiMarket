import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    promoCode: boolean = false;

    constructor(private router: Router) {}

    ngOnInit() {}

    onSubmit(form: any) {
        const email = form.value.email;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!form.valid) {
            this.errorMessage =
                "Il faut une addresse email pour s'inscrire à la newsletter";
            this.successMessage = null;
            console.log('Invalid form');
        } else if (!emailRegex.test(email)) {
            this.errorMessage = "Format d'email invalide";
            this.successMessage = null;
            console.log('email invalide');
        } else {
            this.errorMessage = null;
            this.successMessage = 'Inscrit à la newsletter';
            console.log(`Valid form with email: ${form.value.email}`);
            this.promoCode = true;

            setTimeout(() => {
                this.promoCode = false;
            }, 3000);
        }
    }

    onTermsOfServiceClicked() {
        this.router.navigate(['/terms-of-service']);
    }

    onPrivacyPolicyClicked() {
        this.router.navigate(['/privacy-policy']);
    }
}
