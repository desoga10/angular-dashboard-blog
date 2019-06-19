import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable} from 'rxjs';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AfService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }
   loginInWithGoogle(){
     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
   }

   logOut(){
     this.afAuth.auth.signOut();
   }
}
