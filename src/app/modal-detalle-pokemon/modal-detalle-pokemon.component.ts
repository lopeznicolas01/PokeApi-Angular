import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiPokemonService } from '../service/api-pokemon.service';

@Component({
  selector: 'app-modal-detalle-pokemon',
  templateUrl: './modal-detalle-pokemon.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal-detalle-pokemon.component.scss']
})
export class ModalDetallePokemonComponent implements OnInit {

  constructor(public modal:NgbModal, private apiPokemonService: ApiPokemonService) { }

  @Input() data: any;

  detallesPokemon:any={};

  ngOnInit(): void {
    //this.obtenerDetalles(this.data);
    this.obtenerLocalDetalles(this.data);
  }

  closeModal() {
    this.modal.dismissAll();
  }

  obtenerLocalDetalles(name){
    this.apiPokemonService.getLocalDataDetail(name).subscribe(data=>{
      this.detallesPokemon=data.body;
    })

  }


}
