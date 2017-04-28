import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.postService.getPost(+params['id']))
    .subscribe(post => this.post = post);
  }

  view(): void {
    this.router.navigate(['posts', this.post.id]);
  }

  save(title: string, content: string): void {
    this.post.title = title;
    this.post.content = content;

    this.location.back();
  }
}
