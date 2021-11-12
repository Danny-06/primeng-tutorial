import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';

  ngOnInit() {
    const buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLElement>

    buttons.forEach(button => {

      button.addEventListener('click', function(event) {
        AppComponent.hideEjercicios()
  
        const n = button.dataset.ej
        const ejercicio = document.querySelector(`app-ejercicio${n}`)
        ejercicio?.classList.add('show')
      })

    })
  }


  static hideEjercicios() {
    const ejercicios = document.querySelectorAll('.ejercicio')
    ejercicios.forEach(ej => ej.classList.remove('show'))
  }
}
