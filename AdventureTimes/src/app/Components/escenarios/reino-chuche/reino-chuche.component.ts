import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reino-chuche',
  templateUrl: './reino-chuche.component.html',
  styleUrls: ['./reino-chuche.component.scss']
})
export class ReinoChucheComponent implements OnInit {
  lugares: Object;
  lugarSelected: number = 0;
  constructor() {
    this.lugares = [
      {
        id: 1,
        title: "Castillo de la Reina Chuche",
        descripcion: "El Castillo de la Dulce Princesa (También conocido como Castillo de Chuchelandia) es el castillo donde vive la Dulce Princesa y la dulce gente, y es la principal construcción del Dulce Reino. Puede tener cierto parecido con Minas Tirith del Señor de los Anillos, ya que se divide en partes (la de abajo mas grande que la de arriba) y tiene una gran torre.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_1.jpg"
      },
      {
        id: 2,
        title: "Ducado de la nuez",
        descripcion: "El Ducado de la Nuez es una región de la Tierra de Ooo en Hora de Aventura. Es el hogar habitado por el Duque de la Nuez, su familia y las demás personas nuez. Todo allí, incluyendo las aves y los árboles, está hecho de nuez. Se trata de un ducado, no de un reino, ya que lo rigen el duque y la duquesa de Nuez y no reyes. Es una pequeña provincia del Dulce Reino.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_2.png"
      },
      {
        id: 3,
        title: "Coolest Hotel",
        descripcion: "El Coolest Hotel es un hotel que está en el Dulce Reino, apareció por primera vez en el episodio El Caso de la Princesa Grumosa. El hotel tiene tres plantas. En el episodio El Caso de la Princesa Grumosa, La Princesa Grumosa se había quedado en la habitación 303. Las llaves de las habitaciones del hotel cuentan con el número de habitación del hotel en un lado y una imagen del edificio con las palabras The Coolest Hotel. La dirección del hotel es 818.",
        image: "/assets/imgs/reino_chuche/reino_chuche_lugares_3.jpg"
      }
    ]
}
changeCard(id){
  this.lugarSelected = id;
}
ngOnInit(): void {
}

}
