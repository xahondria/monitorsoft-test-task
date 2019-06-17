import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];
  popupMessages: string[] = [];

  add(message: string) {
    this.messages.unshift(message);
    this.addPopupMessage(message);
  }

  addPopupMessage(message) {
    this.popupMessages.unshift(message);
    setTimeout(() => {
      this.popupMessages.pop();
    }, 5000);
  }

  removePopupMessage(index) {
    this.popupMessages.splice(index, 1);
  }

  clear() {
    this.messages = [];
    this.popupMessages = [];
  }
}
