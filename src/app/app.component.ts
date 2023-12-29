import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assesment';
  formData: any;

  onFormDataSubmitted(data: any) {
    this.formData = data;
  }
}
