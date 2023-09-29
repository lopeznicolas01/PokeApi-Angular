import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ApiPokemonService } from '../service/api-pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDetallePokemonComponent } from '../modal-detalle-pokemon/modal-detalle-pokemon.component';
import { ActionInterface } from "../interface/action-interface";
import { ModalModificarEliminarComponent } from '../modal-modificar-eliminar/modal-modificar-eliminar.component';
import { DataService } from '../service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("modalConfirmar") modalConfirmarTemplate: TemplateRef<any>;

  arregloResponse: any=[];
  //copiaArregloResponse: any=[];
  //dataResponse: any = {};
  //mostrarResultados: boolean = false;
  //datoBuscar:string="";
  arregloRender:any = [];

  modalConfirmar:NgbModal;
  
  constructor(private apiPokemonService: ApiPokemonService, private modal:NgbModal, private dataService: DataService) { }

  ngOnInit(): void {
    this.obtenerDataLocal();
    this.RenderizarTabla();
    //this.obtenerData();
    //this.obtenerDataLocalDetalles();
    
  }



  // obtenerData(){
  //   this.apiPokemonService.getDataPokemonList().subscribe(data =>{
  //       this.arregloResponse=data.results
  //       this.copiaArregloResponse = this.arregloResponse;
  //   });
  // }

  // buscar(){
  //   if (this.datoBuscar) {
  //     this.arregloResponse = this.copiaArregloResponse.filter(item => 
  //       item.name.toLowerCase().includes(this.datoBuscar.toLowerCase())
  //     );
  //     this.mostrarResultados = true;
  //   } else {
  //     this.arregloResponse = [...this.copiaArregloResponse];
  //     this.mostrarResultados = false;
  //   }
  // }

  // quitarFiltro(){
  //   this.arregloResponse = [this.copiaArregloResponse];
  //   this.datoBuscar = ''; 
  //   this.mostrarResultados = false;
  // }

  openModal(item) {
    const modalRef = this.modal.open(ModalDetallePokemonComponent, {size: 'lg'});
    modalRef.componentInstance.data = item;

  }

  openModalEditar(name){
    const modalRef = this.modal.open(ModalModificarEliminarComponent, {size: 'lg', centered: true});
    modalRef.componentInstance.data = name;
  }

  openModalConfirmar(){
    this.modal.open(this.modalConfirmarTemplate,{size: "sm",centered: true});
  }


  obtenerDataLocal() {
    this.apiPokemonService.getLocalDataList().subscribe(data => {
      this.arregloResponse = data.body.results;
      this.RenderizarTabla(); // Mover RenderizarTabla aquí
    });
  }

  RenderizarTabla() {
    let objetoaux;
    let i: number = 0;
    this.arregloResponse.forEach(element => {
      i = i + 1;
      objetoaux = {
        "id": i,
        "name": element.name,
        "url": element.url
      };
      this.arregloRender.push(objetoaux);
    }); 
  }

  idEliminar:any;
  AceptaryCerrar(){
    this.modal.dismissAll();
    this.arregloRender = this.arregloRender.filter(item => item.id!==this.idEliminar);
  }

  getPokeAsJsonString(){
    return JSON.stringify(this.arregloRender); 
  }

  baseExp:number;
  peso:number;
  altura:number;
  isDefault:string;
  orden:number;
  recibirDatosEditar(){
    this.dataService.baseExp$.subscribe((baseExp) => (this.baseExp = baseExp));
    this.dataService.peso$.subscribe((peso) => (this.peso = peso));
    this.dataService.altura$.subscribe((altura) => (this.altura = altura));
    this.dataService.isDefault$.subscribe((isDefault) => (this.isDefault = isDefault));
    this.dataService.orden$.subscribe((orden) => (this.orden = orden));
  }
  
  editar(id){
    const ObjEdit = this.arregloRender.find(element => element.id===id)
    if(ObjEdit){
      if (ObjEdit.baseExp!=this.baseExp) ObjEdit.baseExp=this.baseExp
      if (ObjEdit.peso!=this.peso) ObjEdit.peso=this.peso
      if (ObjEdit.altura!=this.altura) ObjEdit.altura=this.altura
      if (ObjEdit.isDefault!=this.isDefault) ObjEdit.isDefault=this.isDefault
      if (ObjEdit.orden!=this.orden) ObjEdit.orden=this.orden
    }
      
    
  }

  test(event: Event): void {
    const captured = event as CustomEvent<ActionInterface>;
    const localEvent = captured.detail;
    if (localEvent.action === 'view') {
      let obj = this.arregloRender.find(element =>element.id === localEvent.id)
      this.openModal(obj.name)
    }
    if(localEvent.action == "edit"){
      let obj = this.arregloRender.find(element =>element.id === localEvent.id)
      this.openModalEditar(obj.name)
      this.recibirDatosEditar()
      this.editar(obj.id)
    }
    if(localEvent.action === "delete"){
      this.idEliminar = localEvent.id;
      this.openModalConfirmar();
    }
    
  }

}
