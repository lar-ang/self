import { Injectable } from '@angular/core';

import { Post } from './post';
import { POSTS } from './posts.mock';

@Injectable()
export class PostService {
  static ID : number = 4;
  constructor() { }

  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getPost(id: number): Promise<Post> {
    return this.getPosts()
    .then(posts=>posts.find(post=>post.id === id));
  }

  createPost(title: string, content: string, author: string) : Promise<Post> {
    var id = PostService.ID++;
    return this.getPosts()
    .then(posts=>posts.push({id, title, content, author}))
    .then(postid=>this.getPost(postid));
  }

  deletePost(id: number) {
    this.getPosts()
    .then(posts=> {
      posts.filter (post => post.id === id)
      .forEach (post => posts.splice (posts.indexOf (post), 1));
    });
  }
}
