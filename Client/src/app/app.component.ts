import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  response: string;
  constructor(private appService: AppService) {
    this.appService.get().subscribe(res => {

      console.log(res);
      this.response = res;
    });
  }
}
