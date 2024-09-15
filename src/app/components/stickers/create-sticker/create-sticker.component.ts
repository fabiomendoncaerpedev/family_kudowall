import { Component, OnInit } from '@angular/core';
import { StickerService } from '../services/sticker.service';
import { Sticker } from 'src/app/models/sticker';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sticker',
  templateUrl: './create-sticker.component.html',
  styleUrls: ['./create-sticker.component.css']
})
export class CreateStickerComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private stickerService: StickerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      authorship: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      model: ['modelo3']
    });
  }

  createSticker() {
    console.log(this.form.get('authorship')?.errors)
    if (this.form.valid)
      this.stickerService.create(this.form.value).subscribe(() =>  {
        this.router.navigate(['/list-stickers'])
      });
  }

  enableButton(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }
}
