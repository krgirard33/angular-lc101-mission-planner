import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  experimentsList: object[] = [
    { name: "Mars soil samples" },
    { name: "Plant growth in habitat" },
    { name: "Human bone density" },
  ];

  experimentBeingEdited: object = null;

  constructor() {}

  ngOnInit() {}

  addExperiment(experimentName: string) {
    this.experimentsList.push({ name: experimentName });
  }

  removeExperiment(experimentName: object) {
    let index = this.experimentsList.indexOf(experimentName);
    this.experimentsList.splice(index, 1);
  }

  editExperiment(experimentName: object) {
    this.experimentBeingEdited = experimentName;
  }

  saveExperiment(name: string, experimentName: object) {
    experimentName["name"] = name;
    this.experimentBeingEdited = null;
  }
}
