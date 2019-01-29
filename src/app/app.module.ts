import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PregledRestoranaComponent } from './pregled-restorana/pregled-restorana.component';
import { PregledJelaComponent } from './pregled-jela/pregled-jela.component';
import { PregledPorudzbinaComponent } from './pregled-porudzbina/pregled-porudzbina.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateJeloComponent } from './create-jelo/create-jelo.component';
import { CreatePorudzbinaComponent } from './create-porudzbina/create-porudzbina.component';
import { EditJelaComponent } from './pregled-jela/edit-jela/edit-jela/edit-jela.component';
import { EditPorudzbinaComponent } from './pregled-porudzbina/edit-porudzbina/edit-porudzbina/edit-porudzbina.component';
import { PregledSvihPorudzbinaComponent } from './pregled-svih-porudzbina/pregled-svih-porudzbina.component';
import { PregledSvihJelaComponent } from './pregled-svih-jela/pregled-svih-jela.component';
import { CreateRestoranComponent } from './create-restoran/create-restoran.component';
import { PorudzbinePipe } from './Pipes/porudzbine.pipe';
import { PregledUseraComponent } from './pregled-usera/pregled-usera.component';
import { EditUserComponent } from './pregled-usera/edit-user/edit-user.component';



@NgModule({
  declarations: [ AppComponent, 
  LoginComponent, 
  HomeComponent, 
  AboutComponent, 
  RegisterComponent, HeaderComponent, FooterComponent, PregledRestoranaComponent, PregledJelaComponent, PregledPorudzbinaComponent, CreateJeloComponent, CreatePorudzbinaComponent, EditJelaComponent, EditPorudzbinaComponent, PregledSvihPorudzbinaComponent, PregledSvihJelaComponent,CreateRestoranComponent, PorudzbinePipe, PregledUseraComponent, EditUserComponent],
  imports:      [ 
  BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forRoot([
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "about",
      component: AboutComponent
    },
    {
      path: "login",
      component: LoginComponent
    },
    {
      path: "register",
      component: RegisterComponent
    },
    {
      path: "pregled-restorana",
      component: PregledRestoranaComponent
    },
    {
      path: "pregled-jela",
      component: PregledJelaComponent
    },
    {
      path: "pregled-porudzbina",
      component: PregledPorudzbinaComponent
    },
    {
      path: "create-jela",
      component: CreateJeloComponent
    },
    {
      path: "create-porudzbina",
      component: CreatePorudzbinaComponent
    },
    {
      path: "edit-jela/:idjela",
      component: EditJelaComponent
    },
    {
      path: "edit-porudzbina/:idporudzbina",
      component: EditPorudzbinaComponent
    },
    {
      path: "edit-user/:iduser",
      component: EditUserComponent
    },
    {
      path: "pregled-svih-porudzbina",
      component: PregledSvihPorudzbinaComponent
    },
    {
      path: "pregled-svih-jela",
      component: PregledSvihJelaComponent
    },
    {
      path: "create-restoran",
      component: CreateRestoranComponent
    },
    {
      path: "pregled-usera",
      component: PregledUseraComponent
    }

    ])],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
