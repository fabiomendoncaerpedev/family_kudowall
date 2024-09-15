import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sticker } from 'src/app/models/sticker';

@Injectable()
export class StickerService {

  private readonly API = 'http://localhost:3000/stickers'

  constructor(
    private http: HttpClient
  ) { }

  list(page: number): Observable<Array<Sticker>> {
    const itemsByPage: number = 2;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsByPage);

    return this.http
      .get<Array<Sticker>>(this.API, { params });
  }

  create(sticker: Sticker): Observable<Sticker> {
    return this.http.post<Sticker>(this.API, sticker);
  }

  delete(id: number): Observable<Sticker> {
    const url = `${this.API}/${id}`;

    return this.http.delete<Sticker>(url);
  }

  findById(id: number): Observable<Sticker> {
    const url = `${this.API}/${id}`;

    return this.http.get<Sticker>(url);
  }

  edit(sticker: Sticker): Observable<Sticker> {
    const url = `${this.API}/${sticker.id}`;

    return this.http.put<Sticker>(url, sticker);
  }
}
