import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post: Post;
  resAuthor: string = "FreeAuthor";

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.postService.getPost(+params['id']))
    .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }
  create(title: string, content: string): void {
    this.postService.createPost(title, content, this.resAuthor);
    this.goBack();
  }
}
