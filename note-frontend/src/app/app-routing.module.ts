import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'note-browser', component: NavigationComponent },
  { path: 'note-browser/:noteGroupId/note/:noteId', component: NavigationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'new-note', component: NewNoteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
