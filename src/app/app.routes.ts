import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { TasksComponent } from './pages/tasks/tasks';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent},
  { path: 'contact', component: ContactComponent },
];
