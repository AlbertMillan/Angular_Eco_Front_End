import { Component } from '@angular/core';
import { AuthService } from './../providers/authService/auth.service';
//import 'jquery.scrollto';

declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList:any;
  productDetail:any;
  currentProduct:any;
  currentProductDetail: any;
  email: any;
  isValidEmail:boolean = true;
  hasValidatedEmail: boolean = false;
  

  title = 'My first App!';

  option:number = 0;
  searchBox = "";
  people:any[] = [
    {
      "name": "Maria",
      "age": "1"
    },
    {
      "name": "Lucian",
      "age": "1"
    },
    {
      "name": "Jordan",
      "age": "2"
    },
    {
      "name": "Paco",
      "age": "3"
    }
  ];

  constructor(private authService: AuthService) {
    this.authService.getProducts().subscribe((res) => {
      console.log(res);
      this.productList = res;
    }); 
  }

  registerUser() {
    this.authService.registerUser(this.title).then((result) => {
      console.log('The title of my app is ' + this.title );
    }, error => {
      console.log("Something went wrong. Please try again.")
    });
  }

  getProductInfo(product){
    this.authService.getProductDetails( 'specs/', product.id ).subscribe( res => {
      console.log(res);
      this.productDetail = res;
      this.currentProductDetail = res[0];
    });

    this.currentProduct = product;
    
    $(window).scrollTo({left:0, top:520}, {duration:1500});
  }

  getCurrentProduct(item){
    console.log(item);
    this.currentProductDetail = item;
  }

  subscribeNewsletter() {
    var regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    if( regex.test(this.email) ){
      console.log("Valid Email");
      this.isValidEmail = true;
      this.hasValidatedEmail = true;
    }
    else {
      console.log("Invalid Email");
      this.isValidEmail = false;
    }
  }

  showAll() {
    this.option = 0;
  }
  showPC() {
    this.option = 1;
  }
  showPh() {
    this.option = 2;
  }
  showTa() {
    this.option = 3;
  }

  inputContainer(){
    let styles = {
      // 'border-color': this.isValidEmail ? 'rgba(0,0,0,.15)':'#c42e2e',
      'display': this.hasValidatedEmail ? 'none':'flex',
    };
    return styles;
  }

  inputElement(){
    let styles = {
      'border-color': this.isValidEmail ? 'rgba(0,0,0,.15)':'#c42e2e',
    };
    return styles;
  }

  errorMessage() {
    let styles = {
      'visibility': this.isValidEmail ? 'hidden':'visible',
      'opacity': this.isValidEmail ? '0':'1',
    };
    return styles;
  }

  successMessage() {
    let styles = {
      'visibility': this.hasValidatedEmail ? 'visible':'hidden',
      'opacity': this.hasValidatedEmail ? '1':'0',
    };
    return styles;
  }


}


