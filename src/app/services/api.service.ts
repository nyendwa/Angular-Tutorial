import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient
  ) { }
  //This method is used to communicate with our server 
  get<T>(url: string, option: Options): Observable<T>{
    return this.httpClient.get<T>(url, option) as Observable<T>
  }
}
