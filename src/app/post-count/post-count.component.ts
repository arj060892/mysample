import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { PostObject } from '../shared/models/posts.model';
import { PostHelperService } from '../shared/services/post-helper.service';

@Component({
  selector: 'app-post-count',
  templateUrl: './post-count.component.html',
  styleUrls: ['./post-count.component.css']
})
export class PostCountComponent implements OnInit {
  postCount = 0;
  constructor(private postService: PostHelperService,
    private route: Router) { }

  ngOnInit() {
    // This is just a temp way to do things , we should use Subjects will cover that later
    this.postService.getPosts()
      .subscribe((posts: PostObject[]) => {
        this.postCount = posts.length;
      });
  }

}
