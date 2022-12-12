import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipmentList: object[] = [
    { name: "Habitat dome" },
    { name: "Drones" },
    { name: "Food containers" },
    { name: "Oxygen tanks" },
  ];

  itemBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}

  addItem(itemNew: object) {
    this.equipmentList.push({ name: itemNew });
  }

  removeItem(item: object) {
    let index = this.equipmentList.indexOf(item);
    this.equipmentList.splice(index, 1);
  }

  editItem(item: object) {
    this.itemBeingEdited = item;
  }

  saveItem(thing: string, item: object) {
    item["name"] = thing;
    this.itemBeingEdited = null;
  }
}
