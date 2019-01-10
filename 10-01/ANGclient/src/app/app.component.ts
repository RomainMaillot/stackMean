import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  Déclaration de variables
  */
  public myTitle: String
  public userName: String

  // Injecter des valeurs dans la class
  constructor()
  {
    this.myTitle = `Hello Angular`
    this.userName = `Romain`
  }

  /*
  Méthodes
  */
  //Function pour afficher une alert()
  public displayAlert(): void{
    alert('click')
  }
}
