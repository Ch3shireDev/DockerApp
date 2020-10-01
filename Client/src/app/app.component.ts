import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  response: string;
  messages: Message[];
  constructor(private appService: AppService) {
    this.appService.get().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

  submit() {
    this.appService.post({ content: 'kopytka' }).subscribe();
  }
}
