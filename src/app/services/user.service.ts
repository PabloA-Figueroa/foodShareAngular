import { Injectable } from "@angular/core";
import { Auth,createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut, signInWithPopup,GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'

})
export class UserService{
  constructor( private auth: Auth){

  }
  private userName: string = '';
  private userEmail: string = '';

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName() {
    return this.userName;
  }

  setUserEmail(email: string) {
    this.userEmail = email;
  }

  getUserEmail() {
    return this.userEmail;
  }
  registro ({email, password}:any){
    return createUserWithEmailAndPassword (this.auth,email,password)
  }

  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email,password)
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout() {
    return signOut(this.auth);
  }


}
