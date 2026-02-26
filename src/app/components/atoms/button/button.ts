import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonStyle } from '../../../types/Button';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.html'
})
export class Button {
  label = input.required<string>();
  buttonStyle = input.required<ButtonStyle>();
  link = input<string>();
  icon = input<string>();
}
