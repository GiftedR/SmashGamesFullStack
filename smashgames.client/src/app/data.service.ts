import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Meta } from './Models/meta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studio: BehaviorSubject<Meta> = new BehaviorSubject<Meta>({});

  constructor(private http:HttpClient) { }
}
