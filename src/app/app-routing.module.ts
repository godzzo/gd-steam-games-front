import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DataService } from './service/data.service';

const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
    resolve  : {
      games: DataService
    }
  },
  {
    path: 'first',
    component: FirstComponent,
    resolve  : {
      games: DataService
    }
  },
  {
    path: 'second',
    component: SecondComponent,
    resolve  : {
      games: DataService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
