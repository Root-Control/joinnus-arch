import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Path } from '../app.path.config';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
    basepath : string
    constructor(private http: Http, private path: Path) {
        this.basepath = path.getPath()
    }

    signIn(body) {
        return this.http.post(this.basepath + '/api/auth/signin', body)
            .toPromise()
            .then(response => response.json())
            .catch(err => console.log(err));     
    }
}

