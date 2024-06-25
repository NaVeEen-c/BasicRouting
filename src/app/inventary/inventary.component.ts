import { Component } from '@angular/core';
import { RouterLink,RouterOutlet ,RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-inventary',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './inventary.component.html',
  styleUrl: './inventary.component.css'
})
export class InventaryComponent {

}
