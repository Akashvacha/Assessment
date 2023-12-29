import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() formData: any;
  constructor() { }

  ngOnInit(): void {
    if (this.formData){
      console.log(this.formData);
    }
  }
}
