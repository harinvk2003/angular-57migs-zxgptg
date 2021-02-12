import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  //product property is the input/set property for the component. This property can be set/bound by any of the parent components to this component
  @Input() product: any;
  //notify is the event to the button control in this component. The button control will emit this event. The parent components which include this child component will bind the event to the event method within its component.
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
