import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoteBrowserComponent } from './note-browser/note-browser.component';
import { ModifyNoteComponent } from './modify-note/modify-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NoteBrowserComponent,
    ModifyNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
