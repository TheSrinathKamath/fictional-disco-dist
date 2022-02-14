import { Component, HostListener, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AssistantComponent } from 'src/app/assistant/assistant.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key == '/') {
      console.log(event.key);
      // Your row selection code
    }
  }
  ngOnInit(): void {}
  public openAssistant(): void {
    const dialogRef = this.dialog.open(AssistantComponent, {
      width: '100%',
      minHeight: 'calc(80vh - 90px)',
      height: 'auto',
      data: 'yeah, what do you want?',
      panelClass: 'assistant',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
