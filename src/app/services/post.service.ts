import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts(){
    firebase.database().ref('/posts/').set(this.posts);
  }

  getPost(){
    firebase.database().ref('/posts/').on(
      'value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.posts.sort(function(a,b){
          return Date.parse(a.date)>Date.parse(b.date) ? -1 : Date.parse(a.date)<Date.parse(b.date) ? +1 : 0;
        });
        this.emitPosts();
      }
    );
  }

  createNewPost(newPost: Post){
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }



  setPost(post: Post){
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post){
          return true;
        }
      }
    );
    this.posts[postIndexToRemove] = post;
    this.savePosts();
    this.emitPosts();
 }

}
