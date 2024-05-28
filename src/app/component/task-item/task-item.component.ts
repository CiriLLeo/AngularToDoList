import { Component, OnInit , Input} from '@angular/core';
import { Task } from '../../Task';
import { faTimesSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {
  @Input()
  task!: Task;

  faTimeSquare = faTimesSquare;

  constructor() {}

  ngOnInit(): void {}
}
