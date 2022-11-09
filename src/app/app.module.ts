import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { AppRoutingModule } from './app-routing.module';

const routes: Routes = [
	{ path: ':id/graph', component: GraphComponent },
	{ path: ':id', component: VotePageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		GraphComponent,
		VotePageComponent,
	],
	imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
