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
  addedServers = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreateStatus = 'Server was created';
    this.addedServers.push(this.serverName);
    this.serverCreated = true;
    console.log(this.addedServers);
  }

  onUpdateServerName(event: any): void {
    
    this.serverName = (<HTMLInputElement>event.target).value;
    
    console.log(this.addedServers);
  }
}
