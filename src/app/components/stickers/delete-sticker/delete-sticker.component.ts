import { StickerService } from '../services/sticker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sticker } from 'src/app/models/sticker';

@Component({
  selector: 'app-delete-sticker',
  templateUrl: './delete-sticker.component.html',
  styleUrls: ['./delete-sticker.component.css']
})
export class DeleteStickerComponent implements OnInit {

  sticker: Sticker = {
    content: '',
    authorship: '',
    model: '',
    favorite: false
  }

  constructor(
    private stickerService: StickerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.stickerService.findById(parseInt(id!)).subscribe((response) => {
      this.sticker = response
    });
  }

  deleteSticker() {
    if (this.sticker.id)
      this.stickerService.delete(this.sticker.id).subscribe(() => {
        this.router.navigate(['/list-stickers'])
      });
  }
}
