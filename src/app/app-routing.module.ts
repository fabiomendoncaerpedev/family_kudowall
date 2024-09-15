import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStickerComponent } from './components/stickers/create-sticker/create-sticker.component';
import { ListStickersComponent } from './components/stickers/list-stickers/list-stickers.component';
import { DeleteStickerComponent } from './components/stickers/delete-sticker/delete-sticker.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list-stickers'
  },
  {
    path: 'create-sticker',
    component: CreateStickerComponent
  },
  {
    path: 'list-stickers',
    component: ListStickersComponent
  },
  {
    path: 'stickers/delete-sticker/:id',
    component: DeleteStickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
