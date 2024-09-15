import { Component, Input, OnInit } from '@angular/core';
import { Sticker } from 'src/app/models/sticker';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css']
})
export class StickerComponent implements OnInit {

  @Input('sticker-info') sticker!: Sticker;

  constructor() { }

  ngOnInit(): void {
  }

  stickerWidth(): string {
    return this.sticker.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }
}
