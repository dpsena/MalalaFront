import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { SingUpComponent } from './Components/sing-up/sing-up.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { TherapistComponent } from './Components/therapist/therapist.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { HomeProfessionalComponent } from './Components/home-professional/home-professional.component';
import { HomePatientComponent } from './Components/home-patient/home-patient.component';
import { AuthGuard } from './Guards/auth.guard';
import { ListUserComponent } from './Components/list-user/list-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { ListProfessionalComponent } from './Components/list-professional/list-professional.component';
import { UpdateProfessionalComponent } from './Components/update-professional/update-professional.component';
import { ListPatientComponent } from './Components/list-patient/list-patient.component';
import { AppointmentComponent } from './Components/appointment/appointment.component';
import { BillingComponent } from './Components/billing/billing.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { RecordsComponent } from './Components/records/records.component';
import { RecommendationComponent } from './Components/recommendation/recommendation.component';
import { CreateRecordsComponent} from './Components/create-records/create-records.component';
import { PathologyComponent } from './Components/pathology/pathology.component';
import { ObservationComponent } from './Components/observation/observation.component';




const routesApp: Routes =[
  {path: '', component: HomeComponent },
  {path: 'sing-up', component: SingUpComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'therapist', component: TherapistComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'home-professional',canActivate: [AuthGuard], data:{only:'Professional'}, component:HomeProfessionalComponent},
  {path: 'home-patient',canActivate: [AuthGuard], component:HomePatientComponent},
  {path: 'list-user',canActivate: [AuthGuard], component:ListUserComponent},
  {path: 'update-user',canActivate: [AuthGuard], component:UpdateUserComponent},
  {path: 'delete-user',canActivate: [AuthGuard], component:DeleteUserComponent},
  {path: 'list-professional',canActivate: [AuthGuard], component: ListProfessionalComponent},
  {path: 'list-patient',canActivate: [AuthGuard], component: ListPatientComponent},
  {path: 'update-professional',canActivate: [AuthGuard], component:UpdateProfessionalComponent},
  {path: 'appointment',canActivate: [AuthGuard], component:AppointmentComponent},
  {path: 'billing',canActivate: [AuthGuard], component:BillingComponent},
  {path: 'payment',canActivate: [AuthGuard], component:PaymentComponent},
  {path: 'records',canActivate: [AuthGuard],data:{only:'User'}, component:RecordsComponent},
  {path: 'recommendation',canActivate: [AuthGuard],data:{only:'User'}, component:RecordsComponent},
  {path: 'create-records',canActivate: [AuthGuard],data:{only:'Professional'}, component:CreateRecordsComponent},
  {path: 'pathology',canActivate: [AuthGuard],data:{only:'Professional'}, component:PathologyComponent},
  {path: 'observation',canActivate: [AuthGuard],data:{only:['Professional','User']}, component:ObservationComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SingUpComponent,
    ContactComponent,
    LoginComponent,
    AboutUsComponent,
    TherapistComponent,
    ResetPasswordComponent,
    HomeProfessionalComponent,
    HomePatientComponent,
    UpdateProfessionalComponent,
    ListPatientComponent,
    ListProfessionalComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    AppointmentComponent,
    BillingComponent,
    PaymentComponent,
    RecordsComponent,
    RecommendationComponent,
    CreateRecordsComponent,
    PathologyComponent,
    ObservationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
