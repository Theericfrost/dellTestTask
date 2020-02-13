import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _url: string = "/assets/data/install_history.json";
  configs = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Config[]>(this._url).subscribe((data)=>{
      console.log(data)
      this.configs = data;
    });
  }
}
