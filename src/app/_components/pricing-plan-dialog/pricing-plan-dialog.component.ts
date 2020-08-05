import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-pricing-plan-dialog',
  templateUrl: './pricing-plan-dialog.component.html',
  styleUrls: ['./pricing-plan-dialog.component.scss']
})
export class PricingPlanDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PricingPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
