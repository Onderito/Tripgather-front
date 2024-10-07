import { Routes } from '@angular/router';
import { SteponeComponent } from './page/create-event/stepone/stepone.component.js';
import { SteptwoComponent } from './page/create-event/steptwo/steptwo.component.js';
import { FinalStepComponent } from './page/create-event/final-step/final-step.component.js';

export const routes: Routes = [
    {path : 'stepOne', component : SteponeComponent},
    {path : 'stepTwo', component : SteptwoComponent},
    {path : 'stepFinal', component : FinalStepComponent},
    {path : '', redirectTo : 'stepOne', pathMatch : 'full'},
];
