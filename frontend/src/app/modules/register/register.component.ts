import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RegisterService } from '../../core/services/auth/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  myform: FormGroup;
  confirmPassword: string = '';
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {
    this.myform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  public register = () => {
    console.log(this.myform.get('password')?.value);
    const isPasswordCorrect = this.checkIsConfirmPasswordCorrect(
      this.myform.get('password')?.value,
      this.confirmPassword
    );

    if (this.myform.valid && isPasswordCorrect) {
      let user = { ...this.myform.value, role: 1 };
      this.registerService.register(user).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login']);
      });
    }
  };

  public backToLogin = () => {
    this.router.navigate(['/login']);
  };

  private checkIsConfirmPasswordCorrect = (
    password: string,
    confirmPassword: string
  ) => {
    return password === confirmPassword;
  };
}
