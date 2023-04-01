import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'header1', component: HeaderComponent },
  { path: 'employee', component: EmployeeComponent },

  {
    path: 'rooms',
    component: RoomsComponent,
  },
  { path: ' ', redirectTo: '/rooms', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
