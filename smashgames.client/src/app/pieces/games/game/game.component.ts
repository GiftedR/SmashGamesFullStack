import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../data.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id = 0;
  game: any = {};

  constructor(private route: ActivatedRoute, private data: DataService, private router: Router) {

  }

  ngOnInit():void {
    this.game = this.data.getGameById(this.id);
  }
}
