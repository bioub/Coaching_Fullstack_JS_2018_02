import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DossierService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  getById(id) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
