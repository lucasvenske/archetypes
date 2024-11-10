import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'test',
        component: TestComponent
    },
    {
        path: 'result/:id',
        component: ResultComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
