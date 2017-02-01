import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SenderComponent } from './sender.component';

const routes: Route[] = [
  {
    path: '',
    component: SenderComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
