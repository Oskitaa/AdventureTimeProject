import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reino-fuego',
  templateUrl: './reino-fuego.component.html',
  styleUrls: ['./reino-fuego.component.scss']
})
export class ReinoFuegoComponent implements OnInit {
  habitantes: Object;
  habitanteSelected: number = 0;
  constructor() {
    this.habitantes = [
      {id: 1,title: "Princesa Llama", descripcion: "La Reina Llama (anteriormente conocida como Princesa Llama, verdaderamente llamada Phoebe [ Fibi ]) es uno de los personajes principales de Hora de Aventura.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_1.png"},
      {id: 2,title: "Rey Llama", descripcion: "El Rey Flama (Rey Llama en España y Flame King en E.U.A) es un personaje que apareció por primera vez en el episodio Incendio. Él era el gobernante del Reino del Fuego (hasta que su hija lo destronó) y padre de la Princesa Flama.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_2.png"},
      {id: 3,title: "Conde de fuego", descripcion: "El Conde de Fuego (Don Fuego en España y Fire Count en Estados Unidos) es un villano que aparece en el episodio Su Héroe. Lleva una corona, por lo que fue un gobernante anterior del Reino del Fuego. La única cosa dentro de él son sus expresiones faciales. Él puede ser considerado una representación de Rey Helado, en el sentido de que Finn es el Billy de la Tierra de Ooo. ",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_3.png"},
      {id: 4,title: "Flint", descripcion: "Flint es el hijo primogénito del Rey Flama y el hermano de la Princesa Flama. Según lo declarado por la Princesa Flama en El Traje de Jake, su hermano mayor trabaja en la milicia. Parece que no les gusta cuando alguien es intolerante a su familia y es un poco sobre-protector con respecto a la Princesa Flama. También se ve que tiene un corto temperamento, amenazando a su hermanito pequeño si no ayudaba en El Enfriamiento.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_4.png"},
      {id: 5,title: "Hemanos menores de la princesa flama", descripcion: "Los Hermanos Menores de la Princesa Flama son los hijos del Rey Flama y los hermanos de la Princesa Flama. No se sabe mucho acerca de los dos. Uno de ellos luce similar al Rey Flama ya que lleva una corona y vestuario parecidos al del Rey, mientras que el otro no lleva una corona.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_5.png"},
      {id: 6,title: "Guardián de fuego", descripcion: "Los Guardianes de Fuego aparecen cuando ellos protegían el Palacio de Fuego en los episodios: Incendio, Punto de Ignición, Tierra y Agua y El Trono Rojo. En Incendio, ellos se muestran defendiendo la entrada del palacio y al Rey Flama. En ese episodio, se ve que son amigos de Flambo, ya que lo dejan pasar sin inconvenientes.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_6.png"},
      {id: 7,title: "Bufón de fuego", descripcion: "El Bufón de Fuego debuta en el episodio Incendio. Está hecho totalmente de fuego con ojos negros. Él termina muriendo por culpa de Jake cuando, sin querer, derrama una botella de agua encima de él. Extrañamente, al Rey Flama no parece importarle su muerte, teniendo en cuenta que a él nunca le agradó su bufón.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_7.png"},
      {id: 8,title: "Juglar Llama", descripcion: "El Juglar Llama apareció en el episodio Incendio cuando Jake tomó prestada su guitarra de fuego pues tenía que interpretar la canción Siento Fuego Dentro de Mi a la Princesa Flama como regalo de parte de Finn.",image:"/assets/imgs/reino_fuego/reino_fuego_habitante_8.png"},
    ]
   }
  changeCard(id){
    this.habitanteSelected = id;
  }
  ngOnInit(): void {
  }

}
