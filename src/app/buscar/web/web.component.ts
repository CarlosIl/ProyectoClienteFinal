import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  @Input() anchoPag: any;
  @Input() altoPag: any;

  constructor() { }

  ngOnInit() {
  }
}
