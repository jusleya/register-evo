import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register';
import { StorageService } from '../../services/localStorage.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { vi } from 'vitest';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let localStorageMock: {
    save: ReturnType<typeof vi.fn>;
  };

  let routerMock: {
    navigate: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    localStorageMock = {
      save: vi.fn(),
    };

    routerMock = {
      navigate: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [RegisterComponent, FormsModule],
      providers: [
        { provide: StorageService, useValue: localStorageMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should not submit if form is invalid', () => {
    const form = { invalid: true } as NgForm;

    component.submit(form);

    expect(localStorageMock.save).not.toHaveBeenCalled();
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should save user and navigate if form is valid', () => {
    const form = { invalid: false } as NgForm;

    component.name = 'Thomas';
    component.email = 'thomas@email.com';
    component.password = '12345678';

    component.submit(form);

    expect(localStorageMock.save).toHaveBeenCalledWith('user', {
      name: 'Thomas',
      email: 'thomas@email.com',
      password: '12345678',
    });

    expect(routerMock.navigate).toHaveBeenCalledWith(['/informacoes']);
  });

  it('should return required error message', () => {
    const control = {
      errors: { required: true },
      touched: false,
    };

    const form = {
      submitted: true,
    };

    const error = component.getError(control, form, 'Nome');

    expect(error).toBe('Nome é obrigatório');
  });

  it('should return minlength error message', () => {
    const control = {
      errors: { minlength: { requiredLength: 8 } },
      touched: true,
    };

    const form = {
      submitted: false,
    };

    const error = component.getError(control, form, 'Senha');

    expect(error).toBe('Senha deve ter no mínimo 8 caracteres');
  });
});
