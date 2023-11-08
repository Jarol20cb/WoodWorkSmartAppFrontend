import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registro } from '../model/registro';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url = `${base_url}/register`
  constructor(private http: HttpClient) { }
  insert(cl: Registro) {
    return this.http.post(this.url, cl);
  }

}
