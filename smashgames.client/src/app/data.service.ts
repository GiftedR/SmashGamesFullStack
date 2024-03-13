import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Studio } from './Models/studio';
import { Game } from './Models/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studio$: BehaviorSubject<Studio> = new BehaviorSubject<Studio>({
    name: '',
    description: '',
    games: {
      $values: []
    }
  });

  games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  game$: BehaviorSubject<Game> = new BehaviorSubject<Game>({
    title: '',
    description: '',
    shortdescription: '',
    imageurl: '',
    releasedate: new Date,
    createddate: new Date,
    updateddate: new Date,
    features: {
      $values: []
    }
  })

  constructor(private http: HttpClient) {
    this.getStudioById(1);
    this.getGameById(3);
  }

  getAllStudios(): Observable<Studio[]> {
    return this.http.get<Studio[]>("/api/Studios");
  }

  getStudioById(id: number) {
    this.http.get<Studio>(`/api/Studios/${id}`).subscribe((data) => {
      this.studio$.next(data);
      this.games$.next(data.games.$values);
    })
  }

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>("/api/Games");
  }

  getGameById(id: number) {
    this.http.get<Game>(`/api/Games/${id}`).subscribe((data) => {
      this.game$.next(data);
    })
  }
}
