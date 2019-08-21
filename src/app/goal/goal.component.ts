import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';
import { GoalService } from '../goals-service/goal.service';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[]; // create a property goal of type Goal
  alertService: AlertService; // create a property alertservice of type AlertService
  quote: Quote; // Creates a property quote of type Quote
  constructor(goalService: GoalService, alertService: AlertService, private http: HttpClient, private quoteService: QuoteRequestService) {
    this.goals = goalService.getGoals();
    this.alertService = alertService;
  }
  addNewGoal(goal) {
    // tslint:disable-next-line: prefer-const
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
toggleDetails(index) {
  this.goals[index].showDescription = !this.goals[index].showDescription;
}
completeGoal(isComplete, index) {
if ( isComplete) {
  this.goals.splice(index, 1);
}
}

// a function to delete goals
deleteGoal(isComplete, index) {
  if (isComplete) {
    // tslint:disable-next-line: prefer-const
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}? `);
    if (toDelete) {
      this.goals.splice(index, 1);
      this.alertService.alertMe('The goal has been deleted');
    }
  }
}

  // constructor() { }

  ngOnInit() {
    this.quoteService.quoteRequest();
    this.quote = this.quoteService.quote;
    // interface ApiResponse {
    //   author: string;
    //   quote: string;
    // }
    // this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe(data => {
    //   // Succesful API request
    //   this.quote = new Quote(data.author, data.quote);
    // }, err => {
    //   this.quote = new Quote('Winston Churchill', 'Never ever give up');
    //   console.log('An error occured');
    // });
  }

}
