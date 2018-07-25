import { Component, OnInit } from '@angular/core';
import { PostHelperService } from '../shared/services/post-helper.service';
import { PostObject } from '../shared/models/posts.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  constructor(private postService: PostHelperService, private activeRoute: ActivatedRoute) { }
  heading: string;
  subHeading: string;
  body: string;
  postId = this.activeRoute.snapshot.params['id'];

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((posts: PostObject[]) => {
        posts.forEach((post: PostObject) => {
          if ((post.id.toString() === this.postId)) {
            this.heading = post.name;
            this.subHeading = post.email;
            this.body = post.body;
            return;
          }
        });
      });
  }

}
