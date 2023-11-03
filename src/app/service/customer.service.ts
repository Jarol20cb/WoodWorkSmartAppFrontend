import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = `${base_url}/customers`
  private listaCambio = new Subject<Customer[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Customer[]>(this.url);
  }

  insert(cs: Customer) {
    return this.http.post(this.url, cs);
  }
  setList(listaNueva: Customer[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Customer>(`${this.url}/${id}`);
    }
  update(c: Customer) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
