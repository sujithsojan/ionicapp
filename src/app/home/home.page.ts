import { Component } from "@angular/core";
import { HomeService } from "./home.service";
import { postData, respData } from "./postdataObj";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  [x: string]: any;
  text = "Subject";
  load = false;
  public topic: any;
  public newsData: any;
  postData: postData;
  public detail: any;
  constructor(public homeService: HomeService) {}

  loadComponent() {
    this.load = true;
  }

  search() {
    this.load= true;
    console.log('search')
    this.homeService.getNews(this.postData).subscribe((res: respData) => {
      this.resultData = res;
      this.detail =this.resultData.result.content;
      
      console.log(this.detail);
       console.log(this.resultData.result.content);
       
      
    });
  }
}
