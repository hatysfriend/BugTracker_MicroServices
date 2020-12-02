import { Component, Input } from '@angular/core';
import { Bug } from 'src/app/models/bug';
import { BugService } from './../../bugs/bug.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})

export class ColorPickerComponent {
  @Input() color: string;
  @Input() bug: Bug;
  tagName: string;

  public defaultColors: string[] = [
    '#000105',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#c6a670',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];

  constructor(private bugService: BugService) {}

  public changeColor(color: string): void {
    this.color = color;
  }

  public changeColorManual(color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

    if (isValid) {
      this.color = color;
    }
  }
  
  createTag() {
    const tag = {
      name: this.tagName, 
      colour: this.color
    }

    this.bug.tags.push(tag);

    const updateBug = {
      tags: this.bug.tags
    };

    this.bugService.updateBug(this.bug._id, updateBug).subscribe(() => {
      this.bugService.updateBugData();
    });
  }
}
