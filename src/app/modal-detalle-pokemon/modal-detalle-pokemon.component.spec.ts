import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetallePokemonComponent } from './modal-detalle-pokemon.component';

describe('ModalDetallePokemonComponent', () => {
  let component: ModalDetallePokemonComponent;
  let fixture: ComponentFixture<ModalDetallePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetallePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetallePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
