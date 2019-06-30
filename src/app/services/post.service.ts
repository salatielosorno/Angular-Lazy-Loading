import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService{
  endpoint = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get(this.endpoint + '/posts', httpOptions)
  }
  getSingle(id:any) {
    return this.http.get(this.endpoint + '/posts/' + id, httpOptions)
  }
}
