import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name = "Pablo Roberto";
  img_url = "assets/img/profile_pic.png";
  biography = "I am a programmer\nxdxd"
}
