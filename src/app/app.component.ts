import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApparatusService } from './apparatus-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  title = 'swc-jest-test';

  constructor(
    private router: Router,
    private appS: ApparatusService
  ) {
    this.appS = appS;
  }
}
