import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./modules/public/public.module').then((m)=>m.PublicModule)
  },
  {
    path:'',
    loadChildren: ()=> import('./modules/add-product/add-product.module').then(m=>m.AddProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
