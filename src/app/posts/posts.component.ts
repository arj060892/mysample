import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostObject } from '../shared/models/posts.model';
import { PostHelperService } from '../shared/services/post-helper.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  $posts: Observable<PostObject[]>;
  constructor(private postService: PostHelperService) { }

  ngOnInit() {
    this.$posts = this.postService.getPosts();
  }

}
