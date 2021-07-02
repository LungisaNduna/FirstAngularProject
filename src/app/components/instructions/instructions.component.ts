import { Component, OnInit } from '@angular/core';
import { Instruction } from 'src/app/Models/Instruction';
import { InstructionsService } from '../../services/instructions-service.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  instructions!:Instruction[];
  displayMode:number = 1;

  constructor(private instructionService:InstructionsService) { }

  ngOnInit(): void {
    this.instructionService.getInstructions().subscribe(instructions =>{
      this.instructions = instructions;
    });
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

}
