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
    if(!this.experimentAlreadyAdded(experimentName)) {
      this.experimentsList.push({ name: experimentName });
    }
  }

  removeExperiment(experimentName: object) {
    let index = this.experimentsList.indexOf(experimentName);
    this.experimentsList.splice(index, 1);
  }

  editExperiment(experimentName: object) {
    this.experimentBeingEdited = experimentName;
  }

  saveExperiment(nameEdit: string, experimentName: object) {
    if(!this.experimentAlreadyAdded(nameEdit)) {
      experimentName["name"] = nameEdit;
    }
    this.experimentBeingEdited = null;
  }

  experimentAlreadyAdded(nameIncoming: string): boolean {
    for (let i = 0; i < this.experimentsList.length; i++)
      if (this.experimentsList[i].name === nameIncoming) {
        return true;
      }
    return false;
  }
}
