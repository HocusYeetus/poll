import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { PollCreatorComponent } from './poll-creator/poll-creator.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { LinkViewerComponent } from './link-viewer/link-viewer.component';

const routes: Routes = [
	{ path: '', component: PollCreatorComponent },
	{ path: ':id/graph', component: GraphComponent },
	{ path: ':id', component: VotePageComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		GraphComponent,
		VotePageComponent,
		PollCreatorComponent,
  LinkViewerComponent,
	],
	imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes), FormsModule],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
