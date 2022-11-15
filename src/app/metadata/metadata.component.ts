import {Component, Input, OnInit} from '@angular/core';
import {Metadata} from "../metadata";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  @Input()
  metadata? : Metadata;

  constructor() { }

  ngOnInit(): void {
  }

}
