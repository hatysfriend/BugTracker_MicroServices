import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Bug } from 'src/app/models/bug';

@Component({
  selector: 'app-tag-entry',
  templateUrl: './tag-entry.component.html',
  styleUrls: ['./tag-entry.component.scss']
})
export class TagEntryComponent implements OnInit {
  @Input() isActive: boolean;
  @Input() bug: Bug;

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.isActive = !this.isActive;
  }
}
