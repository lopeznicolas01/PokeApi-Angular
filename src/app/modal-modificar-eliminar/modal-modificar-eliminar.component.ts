import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-modal-modificar-eliminar',
  templateUrl: './modal-modificar-eliminar.component.html',
  styleUrls: ['./modal-modificar-eliminar.component.scss']
})
export class ModalModificarEliminarComponent implements OnInit {

  constructor(public modal:NgbModal, public dataService: DataService ) { }

  @Input() data: any;

  confirmando:boolean =true;
  baseExp:number;
  peso:number;
  altura:number;
  isDefault:string;
  orden:number;
  esDefaultSi = false;
  esDefaultNo = false;

  ngOnInit(): void {
  }

  closeModal() {
    this.modal.dismissAll();
  }

  closeModalConfirm(modal){
    modal.dismiss();
    this.confirmando=true
  }

  openModalConfirmar(contenido){
    this.confirmando=false;
    this.modal.open(contenido,{size: "sm",centered: true});
  }

  toggleEsDefaultSi() {
    this.esDefaultNo = false;
  }

  toggleEsDefaultNo() {
    this.esDefaultSi = false;
  }

  guardarCambios(){
    this.dataService.setBaseExp(this.baseExp);
    this.dataService.setPeso(this.peso);
    this.dataService.setAltura(this.altura);
    this.dataService.setIsDefault(this.isDefault);
    this.dataService.setOrden(this.orden);
    this.modal.dismissAll();
  }
}
