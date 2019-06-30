import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  data: Observable<Object>;
  
  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.data = this.postService.getPosts()
  }
}
