import { Component, OnInit } from '@angular/core';
import { PostHelperService } from '../shared/post-helper.service';
import { Observable } from 'rxjs/Observable';
import { PostObject } from '../shared/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  $posts: Observable<PostObject[]>;
  constructor(
    private postService: PostHelperService) { }

  ngOnInit() {
    this.$posts = this.postService.getPosts();
  }

}
