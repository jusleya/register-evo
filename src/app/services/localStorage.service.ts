import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  save<T>(key: string, data: T): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  clear(key: string): void {
    localStorage.removeItem(key);
  }
}
