import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Bug } from 'src/app/models/bug';
import { Tag } from '../../models/tag';
import { TagServiceService } from './../tag-service.service';
import { BugService } from './../../bugs/bug.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() bug: Bug;
  @Input() isEntry: boolean;
  tags$: Observable<Tag[]>;

  constructor(private tagService: TagServiceService) {}

  ngOnInit(): void {
    this.tagService.updateTagData(this.bug._id);
    this.tags$ = this.tagService.tags$;
  }

  setTagColour(colourPrefix: string) {
    return `is-${colourPrefix}`;
  };

  deleteTag(tagId: string) {
    this.tagService.deleteTag(this.bug._id, tagId).subscribe();
  };
}
