import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-viewer',
  templateUrl: './link-viewer.component.html',
  styleUrls: ['./link-viewer.component.css']
})
export class LinkViewerComponent implements OnInit {
  link: string;

  constructor() {
    this.link = window.location.href;
  }

  ngOnInit(): void {
  }

}
