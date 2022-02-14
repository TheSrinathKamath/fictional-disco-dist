import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-3d',
  templateUrl: './button3d.component.html',
  styleUrls: ['./button3d.component.scss'],
})
export class Button3dComponent implements OnInit {
  public class!: string[];
  public defaultClass: string =
    'button button__clickable button__white border__black border__small shadow__black';

  @Input() public customClass!: string;
  @Input() public text!: string;
  @Output() public onClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  public click(event: Event) {
    this.onClick.emit();
  }
}
