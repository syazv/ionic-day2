import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
 selector: 'app-home',
 templateUrl: 'home.page.html',
 styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user = {id:1, name:"Syaz", age:28}
  score = []

 constructor(private router: Router, private navController: NavController) {}

 ngOnInit(): void {
   console.log("Page successfully loadded")
 }

 ionViewDidEnter() {
  console.log("View Did Enter called")

}

ionViewWillLeave() {
  console.log("Leaving home page")
}

 goToAbout() {
   this.router.navigate(['/about'])
 }

 goToContact() {
  this.navController.navigateForward('/contact')
 }

 goToDetails() {
  this.router.navigate(['/details',1])
 }

 goToProfile() {
  this.navController.navigateForward(['/profile'], {state: {user:this.user}})
  }

  goToAdd() {
    this.navController.navigateForward(['/add-score'])
  }
}