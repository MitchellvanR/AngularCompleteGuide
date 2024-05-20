import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
  styles: [`
    .after-fifth {
      color: white;
    }
  `]
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = [
    'Test server',
    'Test server 2'
  ];
  // Exercise 3
  showPassword = false;
  buttonClickHistory = []
  historyIndex = 0;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onToggleButtonClick() {
    this.togglePasswordDisplay();
    this.historyIndex++;
    this.buttonClickHistory.push(this.historyIndex + ') Display set to ' + this.showPassword);
  }

  togglePasswordDisplay() {
    this.showPassword = !this.showPassword;
  }

  getBackgroundColor(index) {
    return index >= 4 ? 'blue' : '';
  }
}
