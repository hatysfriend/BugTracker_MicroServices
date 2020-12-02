import { Component, Input, OnInit } from '@angular/core';
import { Bug } from 'src/app/models/bug';
import { Tag } from '../../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: Tag[];
  @Input() bug: Bug;

  constructor() { }

  ngOnInit(): void {
  }

  setTagColour(colourPrefix: string) {
    return `is-${colourPrefix}`;
  }
}
