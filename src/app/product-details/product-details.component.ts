import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  adddedProduct: any;

  //injecting the activated route into constrcutor to use it as a service within the component. this is similar to using services
  constructor(private route: ActivatedRoute, private cartservice: CartService) {
    //get the productId from the current route link
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    //filter the product details from the product collection
    this.product = products.find(
      filteredprod => filteredprod.id == productIdFromRoute
    );
  }

  ngOnInit() {}

  addToCart(product) {
    //check if the product already exists in the cart
    if (this.cartservice.items.includes(product)) {
      window.alert("Your product already exists in the cart!");
    } else {
      this.cartservice.addToCart(product);
      window.alert("Your product has been added to the cart!");
    }
  }
}
