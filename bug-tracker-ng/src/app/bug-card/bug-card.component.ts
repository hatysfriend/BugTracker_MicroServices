import { Component, Input, OnInit } from '@angular/core';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { Bug } from './../models/bug';

@Component({
  selector: 'app-bug-card',
  templateUrl: './bug-card.component.html',
  styleUrls: ['./bug-card.component.scss']
})
export class BugCardComponent implements OnInit {
  @Input() bug: Bug;

  faBug = faBug;

  constructor() { }

  ngOnInit(): void {
  }

  setBugColour() {
    if(this.bug.status === "Created") {
      return { 'has-text-danger': true }
    }
    if(this.bug.status === "In-Progress") {
      return { 'has-text-warning': true }
    }
    if(this.bug.status === "Fixed") {
      return { 'has-text-success': true }
    }
  }
}
