import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  BugComponent, 
  BugCardComponent, 
  BugService, 
  BugModalComponent,
  BugDescComponent,
  BugTitleComponent 
} from './bugs/index-bug';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthFlashMsgComponent } from './auth/auth-flash-msg/auth-flash-msg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { RegisterFormComponent } from './auth/register-form/register-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AuthMessagingService } from './auth/auth-messaging.service';
import { AuthService } from './auth/auth.service';
import { TokenService } from './shared/token.service';
import { AuthHeaderService } from './shared/auth-header.service';
import { UserService } from './shared/user.service';
import { BugModalStateService } from './bug-modal-state.service';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './tags/tags.component';
import { TagEntryComponent } from './tag-entry/tag-entry.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthFlashMsgComponent,
    BugComponent,
    LoginFormComponent,
    RegisterFormComponent,
    BugCardComponent,
    NavbarComponent,
    BugModalComponent,
    TagsComponent,
    TagEntryComponent,
    BugDescComponent,
    BugTitleComponent
  ],
  imports: [
    DragDropModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    AuthMessagingService,
    AuthService,
    TokenService,
    BugService,
    AuthHeaderService,
    UserService,
    BugModalStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
