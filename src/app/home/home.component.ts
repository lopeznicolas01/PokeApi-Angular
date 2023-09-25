import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../service/api-pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetallePokemonComponent } from '../modal-detalle-pokemon/modal-detalle-pokemon.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arregloResponse: any = [];
  copiaArregloResponse: any=[];
  dataResponse: any = {};
  mostrarResultados: boolean = false;
  datoBuscar:string="";
  modalSwitch: boolean;
  arregloDetalleResponse:any=[];
  
  constructor(private apiPokemonService: ApiPokemonService, private modal:NgbModal) { }

  ngOnInit(): void {

    this.obtenerData();
  }


  arregloRender:any=[];

  obtenerData(){
    this.apiPokemonService.getDataPokemonList().subscribe(data =>{
        this.arregloResponse=data.results
        this.copiaArregloResponse = this.arregloResponse;
    });

  }

  buscar(){
    if (this.datoBuscar) {
      this.arregloResponse = this.copiaArregloResponse.filter(item => 
        item.name.toLowerCase().includes(this.datoBuscar.toLowerCase())
      );
      this.mostrarResultados = true;
    } else {
      this.arregloResponse = [...this.copiaArregloResponse];
      this.mostrarResultados = false;
    }
  }

  quitarFiltro(){
    this.arregloResponse = [this.copiaArregloResponse];
    this.datoBuscar = ''; 
    this.mostrarResultados = false;
  }

  openModal(item) {
    const modalRef = this.modal.open(ModalDetallePokemonComponent, {size: 'lg'});
    modalRef.componentInstance.data = item;

  }



}
