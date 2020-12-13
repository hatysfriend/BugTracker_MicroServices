import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  faSignOutAlt = faSignOutAlt;
  logoutSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  user$ = this.userService.getUser();
  
  logoutHandler() {
    this.logoutSub = this.authService.logoutUser().subscribe(() => {
      this.router.navigate(['auth/login']);
    })
  }

  ngOnDestroy(): void {
    if (this.logoutSub) {
      this.logoutSub.unsubscribe();
    }
  }
}
