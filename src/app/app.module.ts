import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { taskReducer } from './store/task.reducer';
import { taskEffects } from './store/task.effects';
import { ToDoComponent } from './to-do/to-do.component';
import { AddToDoComponent } from './to-do/add-to-do/add-to-do.component';
import { ToDoListComponent } from './to-do/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './to-do/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    AddToDoComponent,
    ToDoListComponent,
    ToDoItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ data: taskReducer }),
    EffectsModule.forRoot([taskEffects]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
