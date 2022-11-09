import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
	doc,
	addDoc,
	getDoc,
	DocumentData,
	DocumentSnapshot,
	getFirestore,
	onSnapshot,
	updateDoc,
	Unsubscribe,
	increment,
	collection,
	WithFieldValue,
	DocumentReference,
} from 'firebase/firestore';
import { firebaseConfig } from './firebase-config';
import { Poll } from './models/poll';

@Injectable({
	providedIn: 'root',
})
export class ResultsService {
	//sf3fYcWX8bYAmafcRM1G

	async getResults(docID: string): Promise<Poll> {
		let ref = doc(getFirestore(), 'test-poll', docID);
		return getDoc(ref).then(this.docSnapToPoll);
	}

	registerListener(docID: string, callback: (p: Poll) => void): Unsubscribe {
		return onSnapshot(doc(getFirestore(), 'test-poll', docID), (docSnap) =>
			callback(this.docSnapToPoll(docSnap))
		);
	}

	private docSnapToPoll(docSnap: DocumentSnapshot<DocumentData>) {
		let results = new Map<string, number>(
			Object.entries(docSnap.get('counts'))
		);
		return new Poll(results);
	}

	private pollToDocSnap(poll: Poll) {
		let dict: {[answer: string] : number} = {};
		poll.resultsToTuples().forEach(([k, v]) => {
			dict[k] = 0;
			console.log(dict);			
		})
		return {counts : dict} as WithFieldValue<DocumentData>
	}

	createDoc(poll: Poll): Promise<DocumentReference<DocumentData>> {
		return addDoc(collection(getFirestore(), "test-poll"), this.pollToDocSnap(poll));
	}

	incrementAnswer(answer: string, docID: string): void {
		let field = `counts.${answer}`
		updateDoc(doc(getFirestore(), 'test-poll', docID), {
			[field] : increment(1)
		});
	}

	constructor() {
		initializeApp(firebaseConfig);
	}
}
