import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextStringFormComponent } from './text-string-form/text-string-form.component';
import { NumberFormComponent } from './number-form/number-form.component';

const routes: Routes = [
  {path:'string-convert', component: TextStringFormComponent},
  {path:'number-convert', component: NumberFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
