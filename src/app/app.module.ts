import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
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
const routesApp: Routes =[
  { path: '', component: HomeComponent },
  {path: 'sing-up', component: SingUpComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'therapist', component: TherapistComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
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
    ResetPasswordComponent
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
