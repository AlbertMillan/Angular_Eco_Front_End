import { Component } from '@angular/core';
import { AuthService } from './../providers/authService/auth.service';

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
    })
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
    });

    this.currentProduct = product;
  }

  getCurrentProduct(item){
    console.log(item);
    this.currentProductDetail = item;
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
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My first App!';
  people:any[]
  //person = {"name":"", "age":""};
  searchbox:string;

  ngOnInit(){
    this.title = 'My first App!';
    this.people = [
      {
        "name": "Maria",
        "age": 18
      },
      {
        "name": "Lucian",
        "age": 20
      }
    ];
  }
}*/
