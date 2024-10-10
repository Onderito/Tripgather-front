import { Routes } from '@angular/router';
import { SteponeComponent } from './shared/components/create-event/stepone/stepone.component.js';
import { SteptwoComponent } from './shared/components/create-event/steptwo/steptwo.component.js';
import { FinalStepComponent } from './shared/components/create-event/final-step/final-step.component.js';


export const routes: Routes = [
    {path : 'stepOne', component : SteponeComponent},
    {path : 'stepTwo', component : SteptwoComponent},
    {path : 'stepFinal', component : FinalStepComponent},
    {path : '', redirectTo : 'stepTwo', pathMatch : 'full'},
];
