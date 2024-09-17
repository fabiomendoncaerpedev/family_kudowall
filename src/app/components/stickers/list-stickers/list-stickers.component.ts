import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  favorite: boolean = false;
  title: string = 'Meu Mural';

  constructor(
    private stickerService: StickerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stickerService.list(this.page, this.filter, this.favorite).subscribe((response) => {
      this.stickersList = response;
    });
  }

  loadMoreStickers() {
    this.stickerService.list(++this.page, this.filter, this.favorite).subscribe((response) => {
      this.stickersList.push(...response);

      if (!response.length)
        this.hasMoreStickers = false;
    });
  }

  searchStickers() {
    this.hasMoreStickers = true;
    this.page = 1;
    this.stickerService.list(this.page, this.filter, this.favorite).subscribe((response) => {
      this.stickersList = response;
    });
  }

  listFavorites() {
    this.title = 'Meus Favoritos';
    this.favorite = true;
    this.hasMoreStickers = true;
    this.page = 1;
    this.stickerService.list(this.page, this.filter, this.favorite).subscribe((response) => {
      this.stickersList = response;
    });

  }

  reloadBoard() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  deleteSticker(stickerId: number) {
    if (this.favorite) {
      const stickerIndex = this.stickersList.findIndex(sticker => sticker.id == stickerId);
      this.stickersList.splice(stickerIndex, 1);
    }
  }

}
