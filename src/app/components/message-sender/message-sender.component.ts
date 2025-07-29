import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html'
})
export class MessageSenderComponent {
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messageService.addMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
