import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStickerComponent } from './components/stickers/create-sticker/create-sticker.component';
import { ListStickersComponent } from './components/stickers/list-stickers/list-stickers.component';
import { DeleteStickerComponent } from './components/stickers/delete-sticker/delete-sticker.component';
import { EditStickerComponent } from './components/stickers/edit-sticker/edit-sticker.component';

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
  },
  {
    path: 'stickers/edit-sticker/:id',
    component: EditStickerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
