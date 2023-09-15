import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPokemon.ComponenComponent } from './formulario-pokemon.componen.component';

describe('FormularioPokemon.ComponenComponent', () => {
  let component: FormularioPokemon.ComponenComponent;
  let fixture: ComponentFixture<FormularioPokemon.ComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPokemon.ComponenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPokemon.ComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
