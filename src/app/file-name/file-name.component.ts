import {Component, Input, OnInit} from '@angular/core';
import {FileNameField} from "../metadata";

@Component({
  selector: 'app-file-name',
  templateUrl: './file-name.component.html',
  styleUrls: ['./file-name.component.css']
})
export class FileNameComponent implements OnInit {

  @Input()
  fileName? : FileNameField;

  constructor() { }

  ngOnInit(): void {
  }

}
