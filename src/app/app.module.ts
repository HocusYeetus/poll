import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { AppRoutingModule } from './app-routing.module';
import { PollCreatorComponent } from './poll-creator/poll-creator.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: ':id/graph', component: GraphComponent },
	{ path: ':id', component: VotePageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		GraphComponent,
		VotePageComponent,
		PollCreatorComponent,
	],
	imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
