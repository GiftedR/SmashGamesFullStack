import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../../Models/game';
import { Studio } from '../../Models/studio';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;
  studios$: BehaviorSubject<Studio[]> = this.data.studios$;
  constructor(private data: DataService) {

  }

}
