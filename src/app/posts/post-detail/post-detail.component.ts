import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router'
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post;
  constructor(
    private route: ActivatedRoute,
    private PostService: PostService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.PostService.getSingle(params.get('id')).toPromise().then((post)=>{
       this.post = post
      })
    })
  }

}
