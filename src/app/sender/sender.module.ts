import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SenderComponent } from './sender.component';
import { routing } from './sender.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    SenderComponent
  ],
  bootstrap: [
    SenderComponent
  ]
})
export class SenderModule {}
