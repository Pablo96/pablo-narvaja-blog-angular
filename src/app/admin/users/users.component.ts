import { Component } from '@angular/core';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  active_user: User = new User();

  ngOnInit() {
    this.active_user.active = true;
    this.active_user.description = "I am a \nprogramer\nxdxd";
    this.active_user.last_name = "Roberts";
    this.active_user.first_name = "Pablo";
    this.active_user.email = "pablo.roberts@gmail.com";
    this.active_user.profile_pic_url = "assets/img/profile_pic.png";
    this.active_user.superuser = true;
  }
}
