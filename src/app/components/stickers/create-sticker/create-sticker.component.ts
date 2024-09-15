import { Component, OnInit } from '@angular/core';
import { StickerService } from '../services/sticker.service';
import { Sticker } from 'src/app/models/sticker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-sticker',
  templateUrl: './create-sticker.component.html',
  styleUrls: ['./create-sticker.component.css']
})
export class CreateStickerComponent implements OnInit {

  sticker: Sticker = {
    authorship: '',
    content: '',
    model: ''
  };

  constructor(
    private stickerService: StickerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createSticker() {
    this.stickerService.create(this.sticker).subscribe(() =>  {
      this.router.navigate(['/list-stickers'])
    });
  }
}
