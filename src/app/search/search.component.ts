import {Component, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() formDataSubmitted: EventEmitter<any> = new EventEmitter<any>();
  formGroup: FormGroup;
  rooms: any[] = [{ adults: 2, children: 1 }];
  roomDetails: any ;
  dropdown1Options: any[] = [
    { label: 'varient one', value: 'varient one' },
    { label: 'varient two', value: 'varient two' },
  ];

  dropdown2Options: any[] = [
    { label: 'Single Bed', value: 'Single Bed' },
    { label: 'Double Bed', value: 'Double Bed' },
  ];


  bedOptions: any[] = [
    { label: 'Single Bed', value: 'Single Bed' },
    { label: 'Double Bed', value: 'Double Bed' },
  ];


  commentDialogVisible = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hotelNameOrCity: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      dropdown1: [''],
      dropdown2: [''],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const dataToEmit = {
        formValues: this.formGroup.value,
        roomDetails: this.roomDetails,
      };
      this.formDataSubmitted.emit(dataToEmit);
      alert('details added successfully');
    }else{
      alert('Please fill in the details of the form');
    }
  }
  calculateMinCheckOutDate(): Date {
    const checkInDateValue = this.formGroup.get('checkInDate').value;
    if (checkInDateValue) {
      const minCheckOutDate = new Date(checkInDateValue);
      minCheckOutDate.setDate(minCheckOutDate.getDate() + 2);
      return minCheckOutDate;
    }
    return new Date();
  }

  calculateMinCheckInDate(): Date {
    return new Date();
  }
  // tslint:disable-next-line:typedef
  openDailog() {
    this.commentDialogVisible = true;
  }

  addRoom() {
    if (this.rooms.length < 5) {
      this.rooms.push({ number1: 2, number2: 1 });
    }else{
      alert('Can Add upto 5 rooms only');
    }
  }

  submitRoomDetails() {
    const roomDetailsArray = [];

    this.rooms.forEach((room, index) => {
      const roomDetail = {
        roomNumber: index + 1,
        Adults: room.adults,
        Child: room.children,
        selectedBedType: room.selectedBedType,
      };

      roomDetailsArray.push(roomDetail);
    });

    this.roomDetails = roomDetailsArray;

    alert('Successfully added room details');
    this.commentDialogVisible = false;
  }



  confirmDeleteRoom(i: number) {
    this.rooms.splice(i, 1);
  }

  onClick() {
    this.formGroup.reset();
    this.formDataSubmitted.emit(null);
  }

}
