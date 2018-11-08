import { NgModule } from '@angular/core';
import { EmpserviceService } from './services/empservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FetchEmployeeComponent } from './components/fetch-employee/fetch-employee.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddEmployeeComponent,
    FetchEmployeeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ng-cli-universal'
    }),
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    }, {
      path: 'home',
      component: HomeComponent
    }, {
      path: 'fetch-employee',
      component: FetchEmployeeComponent
    }, {
      path: 'add-employee',
      component: AddEmployeeComponent
    }, {
      path: 'employee/edit/:id',
      component: AddEmployeeComponent
    }, {
      path: '**',
      redirectTo: 'home'
    }])
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }