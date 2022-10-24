
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment'
import { NgSelectConfig } from '@ng-select/ng-select';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

  model!: NgbDateStruct;
  model1!: NgbDateStruct;
  model2!: NgbDateStruct;
  placement = 'bottom';
  today = this.calendar.getToday();



  @ViewChild('labelImport')
  labelImport!: ElementRef;

  date!: {year: number, month: number};
  selected!: {startDate: Moment, endDate: Moment};
  selectedDate:any ;
  datePickerConfig:any;

  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = true;
  status5: boolean = true;
  status6: boolean = true;
  status7: boolean = true;

  public color: string = '#2889e9'; 
  public color1: string = '#e920e9';

  public disable: boolean = true;
  select = ['Firefox']
  selectValue: any = null;
  selectValues = [
		{ value: 1, label: 'Firefox' },
		{ value: 2, label: 'Chrome' },
		{ value: 3, label: 'Safari' },
		{ value: 4, label: 'Opera' },
		{ value: 5, label: 'Internet Explorer' },
	]


  constructor( private calendar: NgbCalendar, private config: NgSelectConfig ) { }

  ngOnInit(): void {
    this.selectValue = this.selectValues[0];
    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "MM-DD-YYYY",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    }
  }

  
  clickEvent() { this.status = !this.status;}
  clickEvent1() { this.status1 = !this.status1;}
  clickEvent2() { this.status2 = !this.status2;}
  clickEvent3() { this.status3 = !this.status3;}
  clickEvent4() { this.status4 = !this.status4;}
  clickEvent5() { this.status5 = !this.status5;}
  clickEvent6() { this.status6 = !this.status6;}
  clickEvent7() { this.status7 = !this.status7;}

  fileToUpload: File | any = null;
  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(',');
    this.fileToUpload = files.item(0);
  }

}
