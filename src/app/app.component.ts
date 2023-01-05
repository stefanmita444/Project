import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';


@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-main';
  constructor(private router: Router) {}

}
