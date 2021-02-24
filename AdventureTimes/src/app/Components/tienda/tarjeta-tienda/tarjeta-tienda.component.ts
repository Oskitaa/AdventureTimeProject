import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta-tienda',
  templateUrl: './tarjeta-tienda.component.html',
  styleUrls: ['./tarjeta-tienda.component.scss']
})
export class TarjetaTiendaComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() img: string;

  @Output() activaCompra = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  realizarCompra() {
    this.activaCompra.emit();
  }

}
