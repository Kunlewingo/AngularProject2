import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  private messagesSubject: BehaviorSubject<string[]> = new BehaviorSubject(this.messages);

  constructor() {}

  addMessage(message: string): void {
    this.messages.push(message);
    this.messagesSubject.next([...this.messages]);
  }

  getMessages(): Observable<string[]> {
    return this.messagesSubject.asObservable();
  }
}
