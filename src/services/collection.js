import {addDoc, collection, doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "../firebase";

export  default class Collection{
  createDocument(data,id){
    if(!id) {
      return addDoc(collection(db, this.collectionName), data);
    }
    return setDoc(doc(db, this.collectionName, id),data)
  }
async readDocument(id){
    const docRef = doc(db, this.collectionName,id);
    const docSnap = await getDoc(docRef)
  if(docSnap.exists()){
    return docSnap.date()
  }
  return null
}
}