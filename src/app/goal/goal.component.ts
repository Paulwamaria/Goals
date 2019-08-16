import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
   new Goal ( 1, 'Watch finding Nemo', 'Get an online version and watch Merlin find his son', new Date(2019, 4, 13)),
  new Goal( 2, 'Buy Cookies',  'I have to buy cookies for me', new Date(2019, 10, 15)),
  new Goal( 3,  'Get new Phone Case',  'Diana has her birthday comming soon', new Date(2019, 8, 18)),
  new Goal( 4,  'Get Dog Food', 'Tommy loves expensive snacks and she bites when hungry', new Date(2019, 8, 22)),
  new Goal( 5,  'Solve math homework',  'damn, I love Maths', new Date(2019, 8, 22)),
  new Goal( 6,  'Plot my world domination plan',  'I want this world for myself', new Date(2019, 8, 22)),
  ];
  addNewGoal(goal) {
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
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}? `);
    if (toDelete) {
      this.goals.splice(index, 1);
    }
  }
}

  constructor() { }

  ngOnInit() {
  }

}
