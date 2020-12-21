import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter : number = 0;
  name : string = 'hey';
  unPerro : String = '';
  brews: any;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this.getABrew()
  }

  countClick(){
    this.clickCounter += 1;
  }

  setClasses(){
    let myClasses = {

      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    }
    return myClasses
  }



  probarLog(){

    console.log('click en ProbarLog');
    
  }
  getABrew(){

    this._http.getSpecificBeer(this.unPerro).subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    }
  );
  }
  
}
