import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [ReactiveFormsModule],//responsavel por ativar o uso de formulario reativo
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

    resultado:number = 0
    calculadoraForm : FormGroup;
    constructor(private fb: FormBuilder) {
      this.calculadoraForm = this.fb.group({
        num1 : this.fb.control(50),
        num2 : this.fb.control(30)
      });
    }



    onCalcular(){
      let num1 = this.calculadoraForm.get('num1')?.value;
      let num2 = this.calculadoraForm.get('num2')?.value;
      this.resultado = num1+num2;
    }
}
