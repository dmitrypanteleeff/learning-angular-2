import { Component } from '@angular/core';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedFeature = 'recipe'

  constructor() {

  }


  onNavigate(str: string) {
    console.log(str)
    this.loadedFeature = str;

  }
}
