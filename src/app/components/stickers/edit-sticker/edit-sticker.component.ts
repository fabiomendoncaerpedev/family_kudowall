import { StickerService } from './../services/sticker.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sticker } from 'src/app/models/sticker';

@Component({
  selector: 'app-edit-sticker',
  templateUrl: './edit-sticker.component.html',
  styleUrls: ['./edit-sticker.component.css']
})
export class EditStickerComponent implements OnInit {

  sticker: Sticker = {
    authorship: '',
    content: '',
    model: ''
  }

  constructor(
    private stickerService: StickerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.stickerService.findById(parseInt(id!)).subscribe((response) => {
      this.sticker = response;
    });
  }

  editSticker() {
    this.stickerService.edit(this.sticker).subscribe(() => {
      this.router.navigate(['/list-stickers']);
    });
  }

}
