import { Component, OnInit } from '@angular/core';
import {transformAll} from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrls: ['./serves.component.css']
})
export class ServesComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
