import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth/auth.guard'

const routes: Routes = [
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./logging/logging.module').then(m => m.LoggingModule)
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
