import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


@Injectable(
 {providedIn: 'root'},
)
export class ConfigService {
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/configuration');
  }

  public setData(model: any): Observable<any>{
    return this.http.post('http://localhost:8080/save', model);
  }
}
