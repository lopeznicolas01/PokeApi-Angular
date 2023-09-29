import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseExpSubject = new BehaviorSubject<number>(0);
  baseExp$ = this.baseExpSubject.asObservable();

  private pesoSubject = new BehaviorSubject<number>(0);
  peso$ = this.pesoSubject.asObservable();

  private alturaSubject = new BehaviorSubject<number>(0);
  altura$ = this.alturaSubject.asObservable();

  private isDefaultSubject = new BehaviorSubject<string>('');
  isDefault$ = this.isDefaultSubject.asObservable();

  private ordenSubject = new BehaviorSubject<number>(0);
  orden$ = this.ordenSubject.asObservable();

  // Métodos para actualizar los valores de las propiedades
  setBaseExp(baseExp: number) {
    this.baseExpSubject.next(baseExp);
  }

  setPeso(peso: number) {
    this.pesoSubject.next(peso);
  }

  setAltura(altura: number) {
    this.alturaSubject.next(altura);
  }

  setIsDefault(isDefault: string) {
    this.isDefaultSubject.next(isDefault);
  }

  setOrden(orden: number) {
    this.ordenSubject.next(orden);
  }
}
