import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AllTeamsComponent } from './components/all-teams/all-teams.component';
import { SingleTeamComponent } from './components/single-team/single-team.component';
import { TipComponent } from './class/tip/tip.component';
import { AllTipsComponent } from './components/all-tips/all-tips.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { SingleGameComponent } from './components/single-game/single-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AllTeamsComponent,
    SingleTeamComponent,
    TipComponent,
    AllTipsComponent,
    AllGamesComponent,
    SingleGameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'teams', component: AllTeamsComponent },
      { path: 'tips', component: AllTipsComponent },
      { path: '', component: AllGamesComponent },
      {
        path: '**',
        component: AllTeamsComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
