import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoteBrowserComponent } from './note-browser/note-browser.component';
import { ModifyNoteComponent } from './modify-note/modify-note.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NewNoteComponent } from './new-note/new-note.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoteBrowserComponent,
    ModifyNoteComponent,
    SearchComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
