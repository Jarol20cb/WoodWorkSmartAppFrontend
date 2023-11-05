import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = `${base_url}/orders`
  private listaCambio = new Subject<Order[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Order[]>(this.url);
  }

  insert(cs: Order) {
    return this.http.post(this.url, cs);
  }
  setList(listaNueva: Order[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Order>(`${this.url}/${id}`);
    }
  update(c: Order) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }

}
