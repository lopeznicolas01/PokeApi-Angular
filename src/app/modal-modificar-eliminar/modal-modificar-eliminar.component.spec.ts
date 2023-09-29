import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModificarEliminarComponent } from './modal-modificar-eliminar.component';

describe('ModalModificarEliminarComponent', () => {
  let component: ModalModificarEliminarComponent;
  let fixture: ComponentFixture<ModalModificarEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalModificarEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalModificarEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
