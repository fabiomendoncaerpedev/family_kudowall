import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sticker } from 'src/app/models/sticker';

@Injectable()
export class StickerService {

  private readonly API = 'http://localhost:3000/stickers'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Array<Sticker>> {
    return this.http.get<Array<Sticker>>(this.API);
  }

  create(sticker: Sticker): Observable<Sticker> {
    return this.http.post<Sticker>(this.API, sticker);
  }
}
