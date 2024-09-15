import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateStickerComponent } from './components/stickers/create-sticker/create-sticker.component';
import { ListStickersComponent } from './components/stickers/list-stickers/list-stickers.component';
import { StickerComponent } from './components/stickers/sticker/sticker.component';
import { StickerService } from './components/stickers/services/sticker.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateStickerComponent,
    ListStickersComponent,
    StickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StickerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
