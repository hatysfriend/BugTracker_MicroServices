import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMessagingService } from './../auth-messaging.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message$:Observable<string>;
  isAnimated:boolean;

  constructor(private router: Router, private authMessageService: AuthMessagingService) { }

  ngOnInit(): void {
    this.message$ = this.authMessageService.getMessage();
    this.isAnimated = this.authMessageService.getAnimationState();
  }
}
