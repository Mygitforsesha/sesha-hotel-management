import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationStart,
  NavigationEnd,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Core {
  constructor(private router: Router) {}

  log(...$log: any) {
    console.log(...$log);
  }

  goToPage($page: any) {
    console.log('Navigating to:', $page);
    this.router.navigate(['/', $page]);
  }
}
