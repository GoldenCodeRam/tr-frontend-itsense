import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { CreateComponent } from './routes/products/create/create.component';
import { EditComponent } from './routes/products/edit/edit.component';
import { ListComponent } from './routes/products/list/list.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products/create", component: CreateComponent },
  { path: "products/list", component: ListComponent },
  { path: "products/edit/:id", component: EditComponent },
  // Wildcards for navigation.
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
