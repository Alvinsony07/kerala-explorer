import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
readonly title = input<string>('');
readonly description = input<string>('');
readonly image = input<string>('');
readonly id = input<any>('');
}
