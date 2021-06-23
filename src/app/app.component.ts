import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular10app';
  cdnUrl = "https://cdn.jsdelivr.net/gh/juanfalconcodigo/CDN_TEST@1.0/test.js";
  executeJs() {
    console.log('execute script');
    let me = this;
    const node = document.createElement('script');
    node.src = me.cdnUrl;
    node.type = 'text/javascript';
    node.async = false;
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
