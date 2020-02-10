import { Observable } from 'rxjs/observable';
import { About } from './../models/about.model';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
  })
export class SidebarServices {

    // tslint:disable-next-line: variable-name
  //  private _furl = '../data/data.json';

   private furl = ' https://showcase-7de70.firebaseio.com/data.json';
   private durl = 'https://console.firebase.google.com/project/showcase-7de70/database/showcase-7de70/data~2Fdata~2F-M-hMLJLqIb_sFgEaGYg/';
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<any>(this.furl);
    }

    updateData(data: any) {
        return this.http.put<any>(this.furl , data);
      }
      deleteData(id: number) {
        return this.http.delete(this.furl + id);
     }

    addData(servers: any) {

        return this.http.post<any>(this.furl, servers);
    }
 }
