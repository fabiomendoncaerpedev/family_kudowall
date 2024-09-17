import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form!: FormGroup;

  constructor(
    private stickerService: StickerService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      content: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      authorship: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      model: [''],
      favorite: [false]
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.stickerService.findById(parseInt(id!)).subscribe((response) => {
      this.form.get('id')?.setValue(response.id);
      this.form.get('content')?.setValue(response.content);
      this.form.get('authorship')?.setValue(response.authorship);
      this.form.get('model')?.setValue(response.model);
    });
  }

  editSticker() {
    this.stickerService.edit(this.form.getRawValue()).subscribe(() => {
      this.router.navigate(['/list-stickers']);
    });
  }

  enableButton(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }
}
