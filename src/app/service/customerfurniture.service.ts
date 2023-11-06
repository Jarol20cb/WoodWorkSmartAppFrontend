import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CustomerFurniture } from '../model/customerfurniture';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CustomerfurnitureService {
  private url = `${base_url}/customerFurniture`
  private listaCambio = new Subject<CustomerFurniture[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<CustomerFurniture[]>(this.url);
  }

  insert(cfs: CustomerFurniture) {
    return this.http.post(this.url, cfs);
  }

  setList(listaNueva: CustomerFurniture[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<CustomerFurniture>(`${this.url}/${id}`);
  }
  update(cf: CustomerFurniture) {
    return this.http.put(this.url, cf);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
