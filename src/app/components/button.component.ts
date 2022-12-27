import {Component, Input} from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  buttonText: string = 'Acessar';
  buttonVector: string[] = ['Entrar', 'Sair'];
  buttonObj = {
    label: 'adicionar na sacola',
  }
  @Input () label: string = '';
  @Input () alert: string = '';

  getALert(){
    alert(this.alert)
  }

  getAge() {
    let idade = prompt("Digite sua idade:");
    if (parseInt(idade)>=18) {
      alert ("Seja bem vindo!")
    } else {
      alert ("Você é menor de idade, não pode acessar o conteúdo")
    }
  }
};