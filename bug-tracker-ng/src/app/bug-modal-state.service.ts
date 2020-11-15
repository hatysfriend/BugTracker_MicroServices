import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable()
export class BugModalStateService {
  private isModalOpen$: BehaviorSubject<boolean>;

  constructor() {
    this.isModalOpen$ = new BehaviorSubject<boolean>(false);
  }

  getModalState(): Observable<boolean> {
    return this.isModalOpen$;
  }

  openModal(): void {
    this.isModalOpen$.next(true);
  }

  closeModal(): void {
    this.isModalOpen$.next(false);
  }
}