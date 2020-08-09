import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  selector: 'app-servers',
  //template: `
  //<app-server></app-server>
  //<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreateStatus = 'No Server Was Created';
  serverCreated = false;
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreateStatus = 'Server was created';
    this.serverCreated = true;
  }

  onUpdateServerName(event: any): void {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
