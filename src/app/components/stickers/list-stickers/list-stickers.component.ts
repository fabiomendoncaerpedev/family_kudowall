import { Component, OnInit } from '@angular/core';
import { Sticker } from 'src/app/models/sticker';
import { StickerService } from '../services/sticker.service';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.css']
})
export class ListStickersComponent implements OnInit {

  hasMoreStickers: boolean = true;
  stickersList!: Array<Sticker>;
  page: number = 1;
  filter: string = '';

  constructor(
    private stickerService: StickerService
  ) { }

  ngOnInit(): void {
    this.stickerService.list(this.page, this.filter).subscribe((response) => {
      this.stickersList = response;
    });
  }

  loadMoreStickers() {
    this.stickerService.list(++this.page, this.filter).subscribe((response) => {
      this.stickersList.push(...response);

      if (!response.length)
        this.hasMoreStickers = false;
    });
  }

  searchStickers() {
    this.hasMoreStickers = true;
    this.page = 1;
    this.stickerService.list(this.page, this.filter).subscribe((response) => {
      this.stickersList = response;
    });
  }

}
