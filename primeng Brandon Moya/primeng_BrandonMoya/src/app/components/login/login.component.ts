import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PasswordModule,InputTextModule,CommonModule,CardModule,ReactiveFormsModule,ButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.userForm = this.fb.group({

      email:['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],


    });


  }

  onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }else{
      console.log('Formulario invalido');
    }
  }

  redirectToRegister() {
    this.router.navigate(['/register']);
  }
}
  
