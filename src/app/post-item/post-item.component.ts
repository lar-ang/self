import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

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

  goList(): void {
    this.router.navigate(['posts']);
  }

  goEdit(): void {
    this.router.navigate(['posts', this.post.id, 'edit']);
  }
}
