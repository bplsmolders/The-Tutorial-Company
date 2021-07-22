import { NodeEntry, Node } from '@alfresco/js-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.scss']
})
export class TutorialPageComponent  {
  nodeId = 'ea768be7-f245-451d-a95c-c57ce52a2c15'
  node:Node
  constructor() { }

  getInput(node:NodeEntry[]) {
    this.node=node[0].entry
  }
}
