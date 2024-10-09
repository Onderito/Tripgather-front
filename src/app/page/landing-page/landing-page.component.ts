import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports : [CommonModule,HeaderComponent,CardComponent],
  templateUrl: 'landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  events = [
    { 
      title: 'Australie, séjour en moto', 
      description: 'Venez passer un bon moment avec moi et mes amis en Australie. Au programme, balade en moto et plus !', 
      image: 'assets/imgs/image 17.svg',
      categories: ['Sport', 'Hobbies & Passion'] 
    },
    { 
      title: 'Concert de musique live', 
      description: 'Rejoignez-nous pour une soirée de musique live avec des artistes talentueux.', 
      image: 'assets/imgs/image 17.svg',
      categories: ['Music', 'Art & Culture'] 
    },
    { 
      title: 'Conférence scientifique', 
      description: 'Découvrez les dernières avancées en science et technologie lors de notre conférence annuelle.', 
      image: 'assets/imgs/image 17.svg',
      categories: ['Science Education'] 
    }
  ];  
  
  categories = [
    { name: 'Art & Culture', logo: 'gallery.svg' },
    { name: 'Music', logo: 'audio-square.svg' },
    { name: 'Social Activities', logo: 'people.svg' },
    { name: 'Games', logo: 'Gamepad.svg' },
    { name: 'Hobbies & Passion', logo: 'devices.svg' },
    { name: 'Sport', logo: 'Ball.svg' },
    { name: 'Science Education', logo: 'book.svg' },
    { name: 'Religion & Spirituality', logo: 'hospital.svg' },
  ];

  stories = [
    { title: 'J’ai utilisé TripGather pour me faire des amis au brunch', content: 'Écrivaine et étudiante dans le New Jersey, Brianna Stryker souhaitait se faire des amis dans sa ville. Découvrez comment elle a utilisé TripGather pour y arriver en rejoignant un groupe TripGather de sorties entre filles.', image: 'assets/imgs/first_article.png' },
    { title: 'Faire naître des amitiés à partir de simples contacts', content: 'Il est prouvé qu\'à l\'âge adulte, il est plus difficile de se faire des amis. Mais ne désespérez pas : voici ce que vous pouvez faire pour simplifier les choses.', image: 'assets/imgs/second_article.png' },
    { title: 'Avez-vous le "bon" nombre d’amis ?', content: 'Dans le monde entier, des études ont tenté d\'aider les gens à répondre à cette question. Découvrez les trois niveaux d\'amitié et comment les atteindre.', image: 'assets/imgs/third_article.png' }
  ];
}
