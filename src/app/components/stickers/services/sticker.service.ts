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

  list(page: number, filter: string, favorite: boolean): Observable<Array<Sticker>> {
    const itemsByPage: number = 6;
    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsByPage);

    if (filter?.trim().length > 2)
      params = params.set('q', filter);

    if (favorite)
      params = params.set('favorite', favorite);

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

  changeFavorite(sticker: Sticker): Observable<Sticker> {
    sticker.favorite = !sticker.favorite;

    return this.edit(sticker);
  }
}
