import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { WoodType } from '../model/wood_Type';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class WoodTypeService {
  private url = `${base_url}/wood_type`
  private listaCambio = new Subject<WoodType[]>()

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<WoodType[]>(this.url);
  }

  insert(cs: WoodType) {
    return this.http.post(this.url, cs);
  }
  setList(listaNueva: WoodType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<WoodType>(`${this.url}/${id}`);
    }
  update(c: WoodType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
