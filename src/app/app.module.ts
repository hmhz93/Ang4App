import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {ContactsComponent} from './contacts/contacts.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {ContactsService} from "../services/contacts.service";
import {NewContactComponent} from './new-contact/new-contact.component';

const appRoutes: Routes = [

  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
