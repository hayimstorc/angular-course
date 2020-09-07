import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
  .online{
    color: white
  };`
  ]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = Math.random() <= 0.5 ? "offline" : "online";

  getServerStatus() {
    return this.serverStatus;
  }

  getStatusColor() {
   
    return this.serverStatus == "offline" ? "red" : "green";
  }


}
