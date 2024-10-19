import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-formulario-plantilla1',
  standalone: true,
  imports: [InputTextModule, FormsModule, PasswordModule, ButtonModule],
  templateUrl: './formulario-plantilla1.component.html',
  styleUrl: './formulario-plantilla1.component.css'
})
export class FormularioPlantilla1Component {
  value: string='';
  value2: string='';
}
