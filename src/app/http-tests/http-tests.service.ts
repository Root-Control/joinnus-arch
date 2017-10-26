import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Path } from '../app.path.config';
import 'rxjs/Rx';

@Injectable()
export class HttpTestsService<T> {
    basepath : string

    constructor(private http: Http, private path: Path) {
        this.basepath = path.getPath()
    }
    //  El proyecto backend de mean con el que se hace las pruebas
    //  Se encuentra en "D:/Backend/meanjs"
    list(modelpath): Promise<T[]> {
        return this.http.get(this.basepath + modelpath)
            .toPromise()
            .then((response) => 
                response.json() as T[])
            .catch(err => console.log(err));
    }

    create(modelpath, model): Promise<T> {
        return this.http.post(this.basepath + modelpath, model)
            .toPromise()
            .then(response => response.json() as T)
            .catch(err => console.log(err));
    }

    update(modelpath, model): Promise<T> {
        return this.http.put(this.basepath + modelpath + '/' + model._id, model)
            .toPromise()
            .then(response => response.json() as T)
            .catch(err => console.log(err));
    }

    delete(modelpath, id): Promise<T> {
        return this.http.delete(this.basepath + modelpath + '/' + id)
            .toPromise()
            .then(response => response.json() as T)
            .catch(err => console.log(err));
    }

    findById(modelpath, id): Promise<T> {
        return this.http.get(this.basepath + modelpath + '/' + id)
            .toPromise()
            .then(response => response.json() as T)
            .catch(err => console.log(err));   
    }

    customPost(modelpath, body):Promise<T[]> {
        return this.http.post(this.basepath + modelpath, body)
            .toPromise()
            .then(response => response.json() as T[])
            .catch(err => console.log(err));     
    }
}
