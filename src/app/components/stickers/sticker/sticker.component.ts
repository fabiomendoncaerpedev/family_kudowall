import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StickerService } from './../services/sticker.service';
import { Sticker } from 'src/app/models/sticker';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input('sticker-info') sticker!: Sticker;
  @Output('delete-sticker') deleteSticker: EventEmitter<number> = new EventEmitter();

  constructor(
    private stickerService: StickerService
  ) { }

  ngOnInit(): void {
  }

  stickerWidth(): string {
    return this.sticker.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

  changeFavorIcon(): string {
    return this.sticker.favorite ? 'ativo' : 'inativo';
  }

  updateFavorite() {
    this.stickerService.changeFavorite(this.sticker).subscribe((response) => {
      if (!response.favorite)
        this.deleteSticker.emit(response.id);
    });
  }
}
