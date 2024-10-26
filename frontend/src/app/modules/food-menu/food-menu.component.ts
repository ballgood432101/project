import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { FoodService } from '../../core/services/food/food.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
})
export class FoodMenuComponent {
  public user: any;
  public foods: any;

  constructor(
    private authService: AuthService,
    private foodService: FoodService
  ) {
    this.foodService.getFoods().subscribe((res) => {
      this.foods = res;
    });
  }
}
