import { Component, OnInit, Input } from '@angular/core';
import { Instruction } from 'src/app/Models/Instruction';

@Component({
  selector: 'app-instruction-item',
  templateUrl: './instruction-item.component.html',
  styleUrls: ['./instruction-item.component.css']
})
export class InstructionItemComponent implements OnInit {
  @Input() instruction!:Instruction;
  constructor() { }

  ngOnInit(): void {
  }

}
