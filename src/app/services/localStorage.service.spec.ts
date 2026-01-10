import { TestBed } from '@angular/core/testing';
import { StorageService } from './localStorage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    localStorage.clear();
  });

  it('should save data to localStorage', () => {
    const data = { name: 'Thomas', email: 'thomas@uol.com', password: '12345678' };

    service.save('user', data);

    expect(localStorage.getItem('user')).toBe(JSON.stringify(data));
  });

  it('should get data from localStorage', () => {
    const data = { name: 'Thomas', email: 'thomas@uol.com', password: '12345678' };
    localStorage.setItem('user', JSON.stringify(data));

    const result = service.get<typeof data>('user');

    expect(result).toEqual(data);
  });

  it('should return null if key does not exist', () => {
    const result = service.get('not-found');

    expect(result).toBeNull();
  });

  it('should clear data from localStorage', () => {
    localStorage.setItem('user', 'value');

    service.clear('user');

    expect(localStorage.getItem('user')).toBeNull();
  });
});
