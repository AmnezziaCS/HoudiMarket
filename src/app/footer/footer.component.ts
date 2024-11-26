import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  public stackoverflowUrl: string = 'https://stackoverflow.com/';
  public linkedinUrl: string = 'https://www.linkedin.com/';
  public fiverrUrl:string = 'https://www.fiverr.com/';
  public facebookUrl:string = 'https://www.facebook.com/';
  public twitterUrl:string = 'https://twitter.com/';
  public githubUrl:string = 'https://github.com/';
  public googleUrl:string = 'https://plus.google.com/';
  constructor() { }

  ngOnInit() {
  }

}
