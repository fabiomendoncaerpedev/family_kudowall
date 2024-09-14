import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-sticker',
  templateUrl: './create-sticker.component.html',
  styleUrls: ['./create-sticker.component.css']
})
export class CreateStickerComponent implements OnInit {

  sticker = {
    id: '1',
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createSticker() {
    alert("New sticker created")
  }

}
