import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../../Models/game';
import { Studio } from '../../Models/studio';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  studio$: BehaviorSubject<Studio> = this.data.studio$;

  constructor(private data: DataService) {

  }

}
