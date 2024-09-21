import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./modules/home/view/home-page/home-page.component";
import { AuthPageComponent } from './modules/auth/view/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/view/sidebar-page/sidebar-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AuthPageComponent, SidebarPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ap-modules';
}
