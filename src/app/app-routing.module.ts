import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'persona-update/:id',
    loadChildren: () => import('./persona-update/persona-update.module').then( m => m.PersonaUpdatePageModule)
  },
  {
    path: 'persona-register',
    loadChildren: () => import('./persona-register/persona-register.module').then( m => m.PersonaRegisterPageModule)
  },
  {
    path: 'persona-page',
    loadChildren: () => import('./persona-page/persona-page.module').then( m => m.PersonaPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
