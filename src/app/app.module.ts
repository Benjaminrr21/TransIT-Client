import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/pages/users/users.component';
import { MyroutesComponent } from './components/pages/myroutes/myroutes.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { RegistrationComponent } from './components/pages/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PackagesComponent } from './components/packages/packages.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateorderComponent } from './components/pages/createorder/createorder.component';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge'
import { AddpackagesComponent } from './components/pages/addpackages/addpackages.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { AllordersComponent } from './components/pages/allorders/allorders.component';
import { FollowMyOrderComponent } from './components/pages/follow-my-order/follow-my-order.component';
import { MapComponent } from './components/pages/map/map.component';
import { ItemsComponent } from './components/pages/items/items.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MyroutesComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    PackagesComponent,
    CreateorderComponent,
    AddpackagesComponent,
    MyordersComponent,
    AllordersComponent,
    FollowMyOrderComponent,
    MapComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
