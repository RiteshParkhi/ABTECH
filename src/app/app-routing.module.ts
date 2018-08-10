import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { RunnerAdvanceComponent } from './runner-advance/runner-advance.component';
import { ImageRunnerComponent } from './image-runner/image-runner.component';
import { ScannerComponent } from './scanner/scanner.component';
import { NewsEventsComponent } from './news-events/news-events.component';
import { ContactUsComponent} from './contact-us/contact-us.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'imageRunnerAdv',
        component: RunnerAdvanceComponent
    },
    {
        path: 'imageRunner',
        component: ImageRunnerComponent
    },
    {
        path: 'docScanner',
        component: ScannerComponent
    },
    {
        path: 'newsEvents',
        component: NewsEventsComponent
    },
    {
        path:'contactUs',
        component:ContactUsComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

];


@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutingModule { }
