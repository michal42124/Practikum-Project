import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChildComponent } from './add-child/add-child.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"instructions",component:InstructionsComponent},
  {path:"register",component:RegisterComponent},
  {path:"addChild",component:AddChildComponent},
  { path: "", component:RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
