import { Component } from '@angular/core';
import { Header } from '../../header/header';

@Component({
  selector: 'app-tasks',
  imports: [Header],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
  standalone: true
})
export class TasksComponent {

}
