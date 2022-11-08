import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
	doc,
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	getDoc,
	getFirestore,
	onSnapshot,
	Unsubscribe,
} from 'firebase/firestore';
import { firebaseConfig } from './firebase-config';
import { Poll } from './models/poll';

@Injectable({
	providedIn: 'root',
})
export class ResultsService {
	//sf3fYcWX8bYAmafcRM1G

	// async getResults(docID: string): Promise<Poll> {
	// 	let ref = doc(getFirestore(), 'test-poll', docID);
	// 	return getDoc(ref).then(this.docSnapToPoll);
	// }

	registerListener(docID: string, callback: (p: Poll) => void): Unsubscribe {
		return onSnapshot(
			doc(getFirestore(), 'test-poll', docID),
			(docSnap) => callback(this.docSnapToPoll(docSnap))
		);
	}

	private docSnapToPoll(docSnap: DocumentSnapshot<DocumentData>) {
		let results = new Map<string, number>(
			Object.entries(docSnap.get('counts'))
		);
		return new Poll(results);
	}

	constructor() {
		initializeApp(firebaseConfig);
	}
}
