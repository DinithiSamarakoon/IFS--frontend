import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TrainingsessionComponent } from './trainingsession/trainingsession.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewTrainingSessionsComponent } from './view-training-sessions/view-training-sessions.component';
import { LoginComponent } from './login/login.component';
import { VirtualMachineAllocationComponent } from './virtual-machine-allocation/virtual-machine-allocation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,

    children: [
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'app-view-trainingsession', component: ViewTrainingSessionsComponent, },
      { path: 'app-leaves', component: LeaveApplicationComponent, },
      { path: 'app-vms', component: VirtualMachineAllocationComponent, },
      { path: 'app-vms', component: VirtualMachineAllocationComponent, },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    TrainingsessionComponent,
    LeaveApplicationComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    ViewTrainingSessionsComponent,
    LoginComponent,
    VirtualMachineAllocationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,


  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
