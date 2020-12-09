import { Component, Input, OnInit } from '@angular/core';
import { Bug } from 'src/app/models/bug';
import { TagServiceService } from './../tag-service.service';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  @Input() bug: Bug

  constructor(private tagService: TagServiceService) { }

  ngOnInit(): void { }

  deleteTag(tagId: string) {
    this.tagService.deleteTag(this.bug._id, tagId).subscribe();
  };
}
