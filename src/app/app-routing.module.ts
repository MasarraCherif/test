import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponentComponent} from "./header-component/header-component.component";
import { FooterComponentComponent} from "./footer-component/footer-component.component";
import { HomeComponentComponent} from "./home-component/home-component.component";
import { ListAlbumsComponentComponent} from "./list-albums-component/list-albums-component.component";
import { AddalbumComponent } from './addalbum/addalbum.component';
let HeaderComponent;
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'header', component: HeaderComponentComponent},
  { path: 'footer', component: FooterComponentComponent },
  { path: 'albums', component: ListAlbumsComponentComponent },
  { path: 'addalbums', component: AddalbumComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
