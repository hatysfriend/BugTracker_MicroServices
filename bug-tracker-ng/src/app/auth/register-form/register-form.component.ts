import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthMessagingService } from './../auth-messaging.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  isAnimated: boolean;
  @Output('message') messageEmitter:EventEmitter<string> = new EventEmitter();
  @Output('animation') animationEmitter:EventEmitter<boolean> = new EventEmitter();

  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private authMessagingService: AuthMessagingService, private router: ActivatedRoute, private authService: AuthService, private routerBasic: Router) { }

  ngOnInit(): void {
    this.setMessage('');
    this.isAnimated = this.router.snapshot.queryParams["isAnimated"];
  }

  handleRegistration() {
    const userObj: User = {
      username: this.user.value.username,
      password: this.user.value.password
    };

    this.authService.registerUser(userObj).subscribe(() => {
        this.routerBasic.navigate(['auth/login']);
        this.resetForm();
      }
    );
  }

  resetForm() {
    this.user = undefined;
  };

  resetMessage() {
    this.authMessagingService.setMessage('');
  };

  setMessage(message) {
    this.authMessagingService.setMessage(message);
  };

  emitAnimationData() {
    this.authMessagingService.setAnimationState(this.isAnimated);
  };
}
