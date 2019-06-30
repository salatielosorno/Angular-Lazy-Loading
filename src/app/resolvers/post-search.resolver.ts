import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, from, concat } from 'rxjs';
import { filter, map, concatMap, concatMapTo, flatMap, mapTo, concatAll, mergeMap, toArray } from 'rxjs/operators';
import { PostService } from '../services/post.service';
interface Post{
  title,
  body
}

@Injectable()
export class PostSearch implements Resolve<Observable<any[]>>{

  constructor(
    private PostService: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any[]>{
    return this.PostService.getPosts().pipe(
      map( response => {
        let data = JSON.parse(JSON.stringify(response));
        let medidata = data as any[];
        return medidata;
      }),
      concatMap(arr => from(arr)),
      filter(p => {
        return (p as Post).title.toLowerCase().includes(route.paramMap.get('palabra'))
      }),
      toArray()
    )
  }
}