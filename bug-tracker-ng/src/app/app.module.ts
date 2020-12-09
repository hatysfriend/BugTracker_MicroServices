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
import { CommentService } from './comments/comment.service';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TagsComponent } from './tag/tags/tags.component';
import { TagEntryComponent } from './tag/tag-entry/tag-entry.component';
import { CommentComponent } from './comments/comment/comment.component';
import { CommentEntryComponent } from './comments/comment-entry/comment-entry.component';
import { CommentListComponent } from '../app/comments/comment-list/comment-list.component';
import { CommentUpvoteComponent } from './comments/comment-upvote/comment-upvote.component';
import { BugEntryComponent } from './bugs/bug-entry/bug-entry.component';
import { ColorPickerComponent } from './tag/color-picker/color-picker.component';
import { TagListComponent } from './tag/tag-list/tag-list.component';



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
    BugTitleComponent,
    CommentComponent,
    CommentEntryComponent,
    CommentListComponent,
    CommentUpvoteComponent,
    BugEntryComponent,
    ColorPickerComponent,
    TagListComponent
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
    BugModalStateService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
