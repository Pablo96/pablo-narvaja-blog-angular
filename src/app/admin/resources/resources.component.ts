import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resource_info: string = "size: 15mb<br>extension: PNG (Portable Network Graphics)<br>width: 480px<br>height: 480px<br>bits per pixel: 24 (r:8, g:8, b:8)<br>indexed colors: false"
}
