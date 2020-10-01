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
  content: string;

  refresh() {

    this.appService.get().subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

  constructor(private appService: AppService) {
    this.refresh();
  }

  submit(): void {
    this.appService.post({ content: this.content }).subscribe(res => { this.refresh(); });
  }
}
