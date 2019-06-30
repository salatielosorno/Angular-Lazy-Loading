import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list-keyword',
  templateUrl: './post-list-keyword.component.html',
  styleUrls: ['./post-list-keyword.component.css']
})
export class PostListKeywordComponent implements OnInit {
  posts: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.posts = this.route.snapshot.data;
  }

}
