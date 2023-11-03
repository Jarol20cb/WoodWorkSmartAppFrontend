import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carpenter } from '../model/carpenter';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CarpenterService {
  private url = `${base_url}/carpenters`
  private listaCambio = new Subject<Carpenter[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Carpenter[]>(this.url);
  }

  insert(cs: Carpenter) {
    return this.http.post(this.url, cs);
  }
  setList(listaNueva: Carpenter[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Carpenter>(`${this.url}/${id}`);
    }
  update(c: Carpenter) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
