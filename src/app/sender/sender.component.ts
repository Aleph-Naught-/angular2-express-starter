import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {

  senderTEXT: string;
  senderDATA: Object;
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getAllDocuments() {
    this.http.get("http://localhost:4300/api/db/document")
      .map((resp: Response) => resp.json())
      .subscribe(
        data => {
          this.senderDATA = data;
          this.senderTEXT = this.senderDATA['_id'];
        },
        err => console.error("Error: " + err));
  }
}
