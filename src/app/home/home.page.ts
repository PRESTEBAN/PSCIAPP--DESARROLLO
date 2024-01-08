import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: FirestoreService, private userService: UserService, private router: Router) {}

  getUsuarios(){
    this.firestore.getCollection();
  }
   
  loginWithGoogle() {
    this.userService.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
