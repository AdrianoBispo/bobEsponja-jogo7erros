import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  personagem = '';
  imagem = '';
  textColor = 'primary';

  constructor(public navCtrl: NavController) { }

  clickBob(){
    this.personagem = 'Parabéns! É o Bob Esponja';
    this.imagem = 'https://bit.ly/bob-esponja-image';
    this.textColor = 'primary';
  }

  clickPatrick(){
    this.personagem = 'Você errou! Não é o Patrick';
    this.imagem = 'https://bit.ly/patrick-image';
    this.textColor = 'danger';
  }

  reset(){
    this.personagem = '';
    this.imagem = '';
  }
}
