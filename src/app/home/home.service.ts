import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { postData, respData } from "./postdataObj";

@Injectable()
export class HomeService {
  postUrl: string =
    "https://staging.sunbirded.org/api/content/v1/search?framework=ts_k-12_2&lang=en&orgdetails=orgName'";
  httpOptions = {
    headers: new HttpHeaders({
      "X-Channel-Id": "sunbird",
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  };
  postD = {
    request: {
      query: "test",
      filters: {
        objectType: ["Content"],
        status: ["Live"],
      },
    },
  };
  constructor(public http: HttpClient) {}
  getNews(postD: postData) {
    return this.http.post(this.postUrl, this.postD, this.httpOptions);
  }
}
