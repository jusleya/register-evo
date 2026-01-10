import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationComponent } from './information';
import { StorageService } from '../../services/localStorage.service';
import { Router } from '@angular/router';
import { vi } from 'vitest';

describe('InformationComponent', () => {
  let component: InformationComponent;
  let fixture: ComponentFixture<InformationComponent>;

  let localStorageMock: {
    get: ReturnType<typeof vi.fn>;
    clear: ReturnType<typeof vi.fn>;
  };
  let routerMock: {
    navigate: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    localStorageMock = {
      get: vi.fn(),
      clear: vi.fn(),
    };

    routerMock = {
      navigate: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [InformationComponent],
      providers: [
        { provide: StorageService, useValue: localStorageMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
  });

  it('should load user from storage on init', () => {
    const mockUser = {
      name: 'Thomas',
      email: 'thomas@email.com',
      password: '12345678',
    };

    localStorageMock.get.mockReturnValue(mockUser);

    component.ngOnInit();

    expect(localStorageMock.get).toHaveBeenCalledWith('user');
    expect(component.user).toEqual(mockUser);
  });

  it('should clear storage and navigate back on goBack', () => {
    component.goBack();

    expect(localStorageMock.clear).toHaveBeenCalledWith('user');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/cadastro']);
  });
});
