import { Component, OnInit } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugService } from '../../shared/bug.service';
import { UserService } from '../../shared/user.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { BugModalStateService } from '../../bug-modal-state.service';
import { BugStatus } from '../../models/bug-status';


@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {
  createdBugs: Bug[] = [];
  inProgressBugs: Bug[] = [];
  fixedBugs: Bug[] = [];
  loading: boolean = false;
  modalOpen$: Observable<boolean>

  statusEnum: typeof BugStatus = BugStatus;

  constructor(private bugService: BugService, private userService: UserService, private bugModalService: BugModalStateService) { }

  user$ = this.userService.getUser();

  ngOnInit(): void {
    this.modalOpen$ = this.bugModalService.getModalState();

    this.bugService.bugs$.subscribe((data) => {
      this.createdBugs = [];
      this.inProgressBugs = [];
      this.fixedBugs = [];
      data.forEach(bug => {
        if(bug.status === 'Created'){
          this.createdBugs.push(bug);
        }
        if(bug.status === 'In-Progress'){
          this.inProgressBugs.push(bug);
        }
        if(bug.status === 'Fixed'){
          this.fixedBugs.push(bug);
        }
      });
    });
  }

  updateBugStatus(event) {
    const bugId = event.item.element.nativeElement.attributes.getNamedItem('bugid').value;
    const newStatus = event.container.element.nativeElement.attributes.getNamedItem('id').value;

    const bugArray: Bug[] = event.container.data;
    const bug = bugArray.find(x => x._id === bugId);
    bug.status = newStatus;
    
    const updatedBug = {
      status: newStatus
    }

    this.bugService.updateBug(bugId, updatedBug).subscribe();
  }

  dropped(event: CdkDragDrop<Bug[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.updateBugStatus(event);
  }
}
