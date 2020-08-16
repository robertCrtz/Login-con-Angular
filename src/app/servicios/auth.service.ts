import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()

export class AuthService{
  constructor(private afsAuth: AngularFireAuth){ }

  registerUser(email: string, passwd: string){
    return new Promise((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(email, passwd)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  loginEmailUser(email: string, passwd:string){
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, passwd)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  isAuth(){
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  onLogout(){
    this.afsAuth.signOut();
  }
}
