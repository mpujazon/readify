import { Component, inject, input } from '@angular/core';
import { ButtonStyle } from '../../../types/Button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html'
})
export class Button {
  private router = inject(Router);

  label = input.required<string>();
  buttonStyle = input.required<ButtonStyle>();
  link = input<string>();
  icon = input<string>();


  redirectTo() {
    this.router.navigate([this.link()]);
  }
}
