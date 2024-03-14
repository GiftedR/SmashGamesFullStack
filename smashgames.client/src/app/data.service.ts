import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Studio } from './Models/studio';
import { Game } from './Models/game';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studios$: BehaviorSubject<Studio[]> = new BehaviorSubject<Studio[]>([]);

  studio$: BehaviorSubject<Studio> = new BehaviorSubject<Studio>({
    name: '',
    description: '',
    games: {
      $values: []
    }
  });

  games$: BehaviorSubject<Game[]> = new BehaviorSubject<Game[]>([]);

  game$: BehaviorSubject<Game> = new BehaviorSubject<Game>({
    gameID: 0,
    title: '',
    description: '',
    shortDescription: '',
    imageUrl: '',
    releaseDate: new Date,
    createdDate: new Date,
    updatedDate: new Date,
    features: {
      $values: []
    }
  })

  constructor(private http: HttpClient) {
    this.getStudioById(1);
    this.getGameById(3);
    this.getAllStudios();
  }

  getAllStudios() {
    this.http.get<Studio[]>("/api/Studios").subscribe(data => {
      this.studios$.next(data);
    });
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
