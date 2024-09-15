import { Component, OnInit } from '@angular/core';
import { Sticker } from 'src/app/models/sticker';
import { StickerService } from '../services/sticker.service';

@Component({
  selector: 'app-list-stickers',
  templateUrl: './list-stickers.component.html',
  styleUrls: ['./list-stickers.component.css']
})
export class ListStickersComponent implements OnInit {

  stickersList!: Array<Sticker>;

  constructor(
    private stickerService: StickerService
  ) { }

  ngOnInit(): void {
    this.stickerService.list().subscribe((response) => {
      this.stickersList = response;
    });
  }

}
