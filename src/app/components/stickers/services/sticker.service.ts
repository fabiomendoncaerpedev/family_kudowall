import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class StickerService {

  constructor(
    private http: HttpClient
  ) { }
}
