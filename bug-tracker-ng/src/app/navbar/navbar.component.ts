import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() username: string;

  faSignOutAlt = faSignOutAlt;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.authService.logoutUser().subscribe(() => {
      this.router.navigate(['auth/login']);
    })
  }
}
