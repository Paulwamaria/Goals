import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent} from './goal/goal.component';

import { AboutComponent } from './about/about.component';
// import { goals } from './goals';

const routes: Routes = [
  {path: 'goals', component: GoalComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
