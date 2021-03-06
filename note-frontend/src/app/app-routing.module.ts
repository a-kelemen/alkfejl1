import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth.guard';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NewNoteGroupComponent } from './new-note-group/new-note-group.component';

const routes: Routes = [
  { path: '', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'note-browser', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'note-browser/:noteGroupId/note/:noteId', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'new-note', component: NewNoteComponent, canActivate: [AuthGuard] },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'new-note-group', component: NewNoteGroupComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
