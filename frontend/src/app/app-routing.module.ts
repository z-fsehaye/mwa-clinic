import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorRoleGuard } from './doctor-role.guard';
import { LoginComponent } from './login/login.component';
import { PatientRoleGuard } from './patient-role.guard';
import { SignupComponent } from './signup/signup.component';
import { TokenGuard } from './token.guard';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(module => module.DoctorModule), canActivate: [TokenGuard, DoctorRoleGuard] },
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(module => module.PatientModule), canActivate : [TokenGuard, PatientRoleGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}