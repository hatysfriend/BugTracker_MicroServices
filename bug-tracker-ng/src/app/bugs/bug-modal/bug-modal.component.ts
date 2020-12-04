import { Component, OnInit } from '@angular/core';
import { BugModalStateService } from '../../bug-modal-state.service';
import { Observable } from 'rxjs';
import { Bug } from '../../models/bug';
import { BugService } from '../bug.service';
import { Router } from '@angular/router';
import { faBug, faComment, faList } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './../../shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-bug-modal',
  templateUrl: './bug-modal.component.html',
  styleUrls: ['./bug-modal.component.scss']
})
export class BugModalComponent implements OnInit {
  isModal$: Observable<boolean>;
  bug$: Observable<Bug>
  user$: Observable<User>;

  faBug = faBug;
  faList = faList;
  faComment = faComment;

  constructor(
    private modalService: BugModalStateService, 
    private bugService: BugService, 
    private router: Router,
    private user: UserService) { }

  ngOnInit(): void {
    const id = history.state.bugId;
    this.bug$ = this.bugService.getBugById(id);
    this.user$ = this.user.getUser();
  }

  

  closeModal() {
    this.router.navigate(['bugs']);
    this.modalService.closeModal();
  }

  setBugColour(bug: Bug) {
    if(bug.status === "Created") {
      return { 'has-text-danger': true }
    }
    if(bug.status === "In-Progress") {
      return { 'has-text-warning': true }
    }
    if(bug.status === "Fixed") {
      return { 'has-text-success': true }
    }
  }
}
