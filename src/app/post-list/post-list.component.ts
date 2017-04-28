import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: []
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) { }

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit(): void {
    this.getPosts();
  }

  deletePost(id: number): void {
    var bDel = confirm("Are you sure?");
    if (bDel == true) {
      this.postService.deletePost(id);
    }
  }
}
