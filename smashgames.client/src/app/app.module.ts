import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { MenubarComponent } from './pieces/menubar/menubar.component';
import { HomeComponent } from './pieces/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './pieces/games/game/game.component'; //Used for individual game page
import { GamesComponent } from './pieces/games/games.component';

const routes: Routes = [
  { path: '', pathMatch:"full", component: HomeComponent },
  { path: 'Games', component: GamesComponent },
  { path: 'Games/:id', component: GameComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    GameComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
