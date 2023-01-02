import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {User} from "../interfaces/User";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    user: User | null = null;
    userData: Observable<firebase.default.User | null>;

    constructor(private fireAuth: AngularFireAuth, private db: AngularFireDatabase) {
        this.userData = fireAuth.authState;
        this.userData.subscribe(user => {
            if (user) {
                this.db.object<any>(`users/${user?.uid}`).valueChanges().subscribe(data => {
                    this.user = data;
                })
            } else {
                this.user = null;
            }
        });
    }

    register(email: string, password: string, displayName: string, role: string): Promise<firebase.default.auth.UserCredential> {
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(r => {
            if (r.user) {
                this.user = {
                    id: r.user.uid,
                    email: email,
                    displayName: displayName,
                    role: role,
                    trips: []
                }
                if (r.user) this.db.list('users').set(r.user.uid, this.user);
            }
            return r
        });
    }

    login(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    }

    logout(): void {
        this.fireAuth.signOut();
    }

    getAllUsers(): Observable<User[]> {
        return this.db.list<User>('users').valueChanges();
    }

    setPersistence(persistence: string): void {
        this.fireAuth.setPersistence(persistence);
    }
}
