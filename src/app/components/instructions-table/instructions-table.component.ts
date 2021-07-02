import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/Models/Instruction';


@Component({
  selector: 'app-instructions-table',
  templateUrl: './instructions-table.component.html',
  styleUrls: ['./instructions-table.component.css']
})
export class InstructionsTableComponent implements OnInit {
  instructions!:Instruction[]
  constructor() { }

  ngOnInit(): void {
    this.instructions = [
      {instructionId:1,tradeDate:"2018-03-05T00:00:00",settlementDate:"2018-03-09T00:00:00",buySell:"B",nominal:100,dealPrice:33,consideration:3250,instrumentId:"SBU"},
      {instructionId:2,tradeDate:"2018-03-05T00:00:00",settlementDate:"2018-03-09T00:00:00",buySell:"B",nominal:100,dealPrice:33,consideration:3250,instrumentId:"SBU"},
      {instructionId:3,tradeDate:"2018-03-06T00:00:00",settlementDate:"2018-03-12T00:00:00",buySell:"B",nominal:100,dealPrice:28,consideration:2775,instrumentId:"SBU"},
    ]
  }

}
