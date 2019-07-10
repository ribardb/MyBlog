import { Component, OnInit, Input, OnDestroy  } from '@angular/core';
import { Post } from '../models/Post.model';
import {Subscription} from 'rxjs/Subscription';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit , OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPost();
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
