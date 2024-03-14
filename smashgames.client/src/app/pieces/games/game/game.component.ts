import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Game } from '../../../Models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{

  id = 0;
  game: BehaviorSubject<Game> = this.data.game$;

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getGameData();
      }
    })
  }

  getGameData(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = +data.get('id')!;
    });
    this.data.getGameById(this.id);
    console.log(this.game);
  }

  ngOnInit(): void {
    this.getGameData()
  }
}
