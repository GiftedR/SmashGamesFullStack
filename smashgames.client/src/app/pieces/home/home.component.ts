import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Studio } from '../../Models/studio';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../Models/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent{
  
  studio$: BehaviorSubject<Studio> = this.data.studio$;
  games$: BehaviorSubject<Game[]> = this.data.games$;
  constructor(private data: DataService) {

  }
}
