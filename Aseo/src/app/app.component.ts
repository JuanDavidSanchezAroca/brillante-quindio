import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@layout/header/header.component';
import { FooterComponent } from '@layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [`
    main {
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'Brillante Quindío';
}
