import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output';

  onomatopiaList: Array<string> = []
  onReceiveNewOnomatopia(event: string): void {
    this.onomatopiaList.push(event)
  }
}
