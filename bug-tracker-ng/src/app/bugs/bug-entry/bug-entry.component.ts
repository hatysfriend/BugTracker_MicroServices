import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BugService } from '../../shared/bug.service';
import { Bug } from './../../models/bug';
import { BugStatus } from '../../models/bug-status';

@Component({
  selector: 'app-bug-entry',
  templateUrl: './bug-entry.component.html',
  styleUrls: ['./bug-entry.component.scss']
})

export class BugEntryComponent implements OnInit {
  @Input() status: BugStatus;
  faPlus = faPlus;
  isInput: boolean = false;
  title: string;
  showWarning: boolean = false;

  constructor(private bugService: BugService) { }

  ngOnInit(): void {
  }

  showInput() {
    this.isInput = true;
  }

  saveNewBug() {
    if(this.title === undefined || this.title.trim().length === 0) {
      this.showWarning = true;
      return;
    }

    const newBug: Bug = {
      status: this.status,
      name: this.title,
      author: "Not In Use",
      description: "Enter a description here..."
    }

    this.bugService.addBug(newBug).subscribe();
    this.cancelEntry();
  }

  cancelEntry() {
    this.title = "";
    this.isInput = false;
    this.closeFlash();
  }

  closeFlash() {
    this.showWarning = false;
  }
}
