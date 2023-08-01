import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './registration/registration.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms' ;
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import { ApiInterceptorInterceptor } from './api-interceptor.interceptor';
import { FormsModule } from '@angular/forms';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserCartComponent,
    EditVehicleComponent,
    PageNotFoundComponent,
    SearchComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    DragDropModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }


