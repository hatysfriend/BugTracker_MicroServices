import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthMessagingService } from './../auth-messaging.service';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  isAnimated: boolean;

  user = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private routerActive: ActivatedRoute, 
    private authMessagingService: AuthMessagingService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.setMessage('');
    this.isAnimated = this.routerActive.snapshot.queryParams["isAnimated"];
  }

  handleLogin() {
    const userObj: User = {
      username: this.user.value.username,
      password: this.user.value.password
    };

    this.authService.loginUser(userObj).subscribe(
      (res) => {
        this.router.navigate(['workspace']);
      },
      (err) => {
        this.resetForm();
        if (err.status == 401) {
          return this.setMessage("Wrong Username Or Password");
        }
        else {
          return this.setMessage("");
        }
      } 
    );
  }

  resetForm() {
    this.user.reset();
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
