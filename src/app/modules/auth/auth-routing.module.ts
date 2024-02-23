import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component'
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AuthComponent,
        children: [
            { path: "", component: LoginComponent, pathMatch: "full" },
            { path: '**', redirectTo: ""}
        ]  
    }
  ])],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
