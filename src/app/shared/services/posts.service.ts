import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getFirestore, doc, getDoc } from '@angular/fire/firestore';
import {map} from "rxjs/operators"
import { Post } from "../interfaces/post"

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts!: Observable<any>;
  db = getFirestore();
  constructor(private firestore: Firestore) {
    const posts = collection(firestore, 'posts');
    this.posts = collectionData(posts);
  }

  getData = () => {
    return (this.posts).pipe(map(res=>{
      return res.sort((a:any, b:any) =>b.date.seconds-a.date.seconds)
    }))
  }

  getPost = async (id: string) => {
    const db = getFirestore();
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }
}

