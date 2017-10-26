import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TodoExampleService {

constructor(private http: Http) { }

  getRequest() {
    return this.http.get('http://httpbin.org/get')
      .map((response) => response.json());
  }
}
