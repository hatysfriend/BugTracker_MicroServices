import { Component, OnInit } from '@angular/core';
import { AuthMessagingService } from './../auth-messaging.service';

@Component({
  selector: 'app-auth-flash-msg',
  templateUrl: './auth-flash-msg.component.html',
  styleUrls: ['./auth-flash-msg.component.scss']
})
export class AuthFlashMsgComponent implements OnInit {
  message:string;
  isError:boolean;

  constructor(private authMessageService: AuthMessagingService) { }

  ngOnInit(): void {
    this.authMessageService.getMessage().subscribe((data) => {
      this.message = data;
      if(this.message === ''){
        this.isError = false;
      }
    });
  }
}
