import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../Models/game';
import { Studio } from '../../Models/studio';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;
  constructor(private data: DataService) {

  }

}
