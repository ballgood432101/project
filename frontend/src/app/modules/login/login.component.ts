import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  myform: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.myform = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login = () => {
    if (this.myform.valid) {
      this.authService.login(this.myform.value).subscribe(
        (res) => {
          this.router.navigate(['/home']);
        },
        (err) => {
          alert(err);
        }
      );
    }
  };

  public register = () => {
    this.router.navigate(['/register']);
  };
}
