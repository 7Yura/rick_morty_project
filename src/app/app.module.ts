import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatPaginatorModule} from "@angular/material/paginator";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CharacterComponent} from './components/character/character.component';
import {CharactersComponent} from './components/characters/characters.component';
// import {CharactersHeaderComponent} from './components/characters-header/characters-header.component';
import {EpisodeComponent} from './components/episode/episode.component';
import {EpisodesComponent} from './components/episodes/episodes.component';
// import {EpisodesHeaderComponent} from './components/episodes-header/episodes-header.component';
import {MainLayoutComponent} from "./layouts";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharactersComponent,
    // CharactersHeaderComponent,
    EpisodeComponent,
    EpisodesComponent,
    // EpisodesHeaderComponent,
    // MainHeaderComponent,
    MainLayoutComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressBarModule,
    // RouterLinkWithHref,
    // RouterOutlet,
    MatIconModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
