import { Routes } from '@angular/router';
import { TargetPageComponent } from './target-page/target-page.component';

export const routes: Routes = [
    {path: "target", component: TargetPageComponent},
    {path: "origin", redirectTo: "target"}
];
