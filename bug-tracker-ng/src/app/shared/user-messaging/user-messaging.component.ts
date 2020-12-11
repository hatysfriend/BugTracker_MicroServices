import { Component, OnInit } from '@angular/core';
import { UserMessagingService } from './../user-messaging.service';

@Component({
  selector: 'app-user-messaging',
  templateUrl: './user-messaging.component.html',
  styleUrls: ['./user-messaging.component.scss']
})
export class UserMessagingComponent implements OnInit {
  constructor(private userMsgService: UserMessagingService) { }

  message$ = this.userMsgService.getMessage();

  ngOnInit(): void {
  }
}
