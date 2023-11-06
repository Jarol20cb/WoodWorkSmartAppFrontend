import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FurnitureOrder } from '../model/furnitureorder';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class FurnitureorderService {
  private url = `${base_url}/furniture_order`
  private listaCambio = new Subject<FurnitureOrder[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<FurnitureOrder[]>(this.url);
  }

  insert(cs: FurnitureOrder) {
    return this.http.post(this.url, cs);
  }

  setList(listaNueva: FurnitureOrder[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<FurnitureOrder>(`${this.url}/${id}`);
    }
  update(c: FurnitureOrder) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
