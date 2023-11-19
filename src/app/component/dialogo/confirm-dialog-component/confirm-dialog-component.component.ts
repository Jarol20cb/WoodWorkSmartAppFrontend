import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  template: `
  <div style="text-align: center;">
      <h2 mat-dialog-title>Confirmación</h2>
      <mat-dialog-content style="text-align: center;">
        <p>¿Eliminar este registro?</p>
      </mat-dialog-content>
      <mat-dialog-actions style="text-align: center; justify-content: center; display: flex; gap: 10px;">
        <button mat-button (click)="confirm(true)" color="warn">Sí</button>
        <button mat-button (click)="confirm(false)">No</button>
      </mat-dialog-actions>
    </div>

  `,
})
export class ConfirmDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  confirm(result: boolean): void {
    this.dialogRef.close(result);
  }
}
