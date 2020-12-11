import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AuthMessagingService {
  isAnimation: boolean = true;
  private message = new BehaviorSubject<string>('');
  message$ = this.message.asObservable();

  getAnimationState(): boolean {
    return this.isAnimation;
  }

  setAnimationState(isAnimated: boolean): void {
    console.log(isAnimated);
    this.isAnimation = isAnimated;
  }

  getMessage(): Observable<string> {
    return this.message$;
  }

  setMessage(message: string): void {
    this.message.next(message);
  }
}