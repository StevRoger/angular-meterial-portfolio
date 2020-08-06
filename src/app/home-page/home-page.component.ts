import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  lstSliders: any[] = [
    { id: "001", img: "assets/bg-img/bg-01.jpg", title: "Slide 1", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
    { id: "002", img: "assets/bg-img/bg-02.jpg", title: "Slide 2", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
    { id: "003", img: "assets/bg-img/bg-03.jpg", title: "Slide 2", subtitle: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.", short_desc: "" },
  ]

  lstPlans: any[] = [
    { id: "", img: "assets/svg/bg-03.svg", name: "Regular", short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat quisquam repellendus laudantium, possimus quas hic obcaecati.", cost: "$2.99/month" },
    { id: "", img: "assets/svg/bg-04.svg", name: "Premium", short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat quisquam repellendus laudantium.", cost: "$19.99/month" },
    { id: "", img: "assets/svg/bg-05.svg", name: "Master", short_desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", cost: "$24.99/month" },
  ]

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

  }

  openPlan() {
    let dialogRef = this.dialog.open(HomePageDialog, {});
  }

  onScroll(destination: any) {
    destination.scrollIntoView({ behavior: "smooth" });
  }



}


@Component({
  selector: "home-page-dialog-component",
  templateUrl: "home-page-dialog-component.html",
})
export class HomePageDialog {

  message: string = "Subcription will start from 01 August 2020";

  lstBenifit: any[] = [
    { title: "Improve your business" },
    { title: "Learn about criticle part in business" },
    { title: "Competable with the top business" },
    { title: "Contact with the expert anytime" },
    { title: "Cancel with money back garantee" },
  ]

  constructor(
    public dialogRef: MatDialogRef<HomePageDialog>,
    private snackBar: MatSnackBar,
  ) { }

  closeDialog() {
    this.dialogRef.close();
  }


  openSnackBar(action: string) {
    this.closeDialog();
    this.snackBar.open(this.message, action, { duration: 3000 });
  }

}