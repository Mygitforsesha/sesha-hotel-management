import { Component } from '@angular/core';
import { Core } from '../services/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
  imports: [MatIconModule],
})
export class Header {
  constructor(public core: Core) {}
}
