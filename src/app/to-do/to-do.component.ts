import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Data } from '../store/task.reducer';
import { Observable } from 'rxjs';
import { init } from '../store/task.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  store$: Observable<Data>;
  constructor(private route: Router, private store: Store<{ data: Data }>) {
    this.store$ = this.store.select('data');
  }
  ngOnInit(): void {
    this.store.dispatch(init());
    if (this.route.routerState.snapshot.url === '/')
      this.route.navigate(['all']);
  }
}
