import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'buscadorFelinos', loadChildren: () =>
        import('./components/buscador-felinos/buscador-felinos.module').then(m => m.BuscadorFelinosModule)
    },
    {
        path: 'fotosFelinos', loadChildren: () =>
        import('./components/fotos-felinos/fotos-felinos.module').then(m => m.FotosFelinosModule)
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'buscadorFelinos'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }