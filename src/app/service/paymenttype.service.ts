import { Injectable } from '@angular/core';
import { PaymentType } from '../model/payment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class PaymenttypeService {
  private url = `${base_url}/payments`
  private listaCambio = new Subject<PaymentType[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<PaymentType[]>(this.url);
  }

  insert(cs: PaymentType) {
    return this.http.post(this.url, cs);
  }
  setList(listaNueva: PaymentType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<PaymentType>(`${this.url}/${id}`);
    }
  update(c: PaymentType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
