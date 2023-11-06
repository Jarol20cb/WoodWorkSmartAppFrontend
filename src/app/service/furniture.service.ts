import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Furniture } from '../model/furniture';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private url = `${base_url}/furnitures`
  private listaCambio = new Subject<Furniture[]>()


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Furniture[]>(this.url);
  }

  insert(cs: Furniture) {
    return this.http.post(this.url, cs);
  }

  setList(listaNueva: Furniture[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Furniture>(`${this.url}/${id}`);
    }
  update(c: Furniture) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
