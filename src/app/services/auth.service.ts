import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  is_staff:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }


  // login(username,password)
}
