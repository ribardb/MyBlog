import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import {PostService} from '../services/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() post: Post;

constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

  }

  onLike(post) {
    this.post.loveIts +=1 ;
    this.postService.setPost(post);

  }

  onDislike(post) {
    this.post.loveIts -=1 ;
    this.postService.setPost(post);
  }

  onDelete(post) {
    this.postService.removePost(post);
  }
}
