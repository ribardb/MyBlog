import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../models/Post.model';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private postService:PostService, private router:Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['',Validators.required],
      content: ['',Validators.required]
    });
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const date = new Date().toString();
    const loveIts = 0;
    const newPost = new Post(title,content,date,loveIts);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
