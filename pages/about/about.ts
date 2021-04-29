import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['about.css']

})
export class AboutPage {

  sex: string;
  heightinch: number;
  heightfeet: number;
  mrobinson: number;
  mmiller: number;
  mhamwi: number;
  mdevine: number;
  frobinson: number;
  fmiller: number;
  fhamwi: number;
  fdevine: number;
  
  constructor(public navCtrl: NavController) {

    calculateIdeal() {

      this.mrobinson = (52 + (this.heightinch * 1.9) ;
      this.mmiller = (56.2 + (this.heightinch * 1.41) ;
      this.mhamwi = (48 + (this.heightinch * 2.7) ;
      this.mmiller = (50 + (this.heightinch * 2.3) ;

      this.frobinson = (49 + (this.heightinch * 1.7) ;
      this.fmiller = (53.1 + (this.heightinch * 1.36) ;
      this.fhamwi = (45.5 + (this.heightinch * 2.2) ;
      this.fmiller = (45.5 + (this.heightinch * 2.3) ;

      if (this.sex == "Male") {
         
        if (this.heightfeet == "5") {
            
          this.mrobinson = Math.round (52 + (this.heightinch * 1.9) ;
          this.mmiller =  Math.round (56.2 + (this.heightinch * 1.41) ;
          this.mhamwi =  Math.round (48 + (this.heightinch * 2.7) ;
          this.mmiller =  Math.round (50 + (this.heightinch * 2.3) ;

        } else if (this.heightfeet > "5") {

          this.mrobinson = Math.round (52 + ( this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 1.9) ;
          this.mmiller =  Math.round (56.2 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 1.41) ;
          this.mhamwi =  Math.round (48 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 2.7) ;
          this.mmiller =  Math.round (50 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 2.3) ;

        }     

      else if (this.sex == "female"){

        if (this.heightfeet == "5"){

          this.frobinson = (49 + (this.heightinch * 1.7) ;
          this.fmiller = (53.1 + (this.heightinch * 1.36) ;
          this.fhamwi = (45.5 + (this.heightinch * 2.2) ;
          this.fmiller = (45.5 + (this.heightinch * 2.3) ;

        } else if (this.height > "5"){

          this.frobinson = (49 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 1.7) ;
          this.fmiller = (53.1 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 1.36) ;
          this.fhamwi = (45.5 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 2.2) ;
          this.fmiller = (45.5 + (this.heightinch + ( (this.heightfeet - 5 ) * 12) ) * 2.3) ;

        }

          }
         }

      }

    }
    

  }

}
