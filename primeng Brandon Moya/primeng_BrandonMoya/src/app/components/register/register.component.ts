import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PasswordModule,InputTextModule,CommonModule,CardModule,ReactiveFormsModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm: any;
  constructor(private fb: FormBuilder, private router: Router){
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      confirmPassword: ['', Validators.required] // Asegúrate de que este control esté aquí
      }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }else{
      console.log('Formulario invalido');
    }
  }

  

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
