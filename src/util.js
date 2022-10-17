import db from "./firebase-config";
import { onSnapshot, collection, setDoc, addDoc, doc, deleteDoc, query, where, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";



export const handleNew = async () => {

    // This will override existing id, because setDoc
    // const handleNew = async () => {
    //   const docRef = doc(db, 'colors', 'color001');
    //   const payload = { name: 'black', value: '#000' }
    //   await setDoc(docRef, payload);
    // }


    const name = prompt('Enter a Name')
    const value = prompt('Enter a Name')
    // you are passing a collection reference instead, u dont specify a specific element id, u just tell which collection do I need to add this document
    const collectionRef = collection(db, "colors");
    const payLoad = { name, value }
    // get ID right after document is created

    const docRef = await addDoc(collectionRef, payLoad);
    console.log('The id is ' + docRef.id);
}

export const handleEdit = async (id) => {

    const name = prompt('Enter a Name')
    const value = prompt('Enter a Name')
    // console.log(id);   
    const docRef = doc(db, "colors", id)
    const payLoad = { name, value }
    await setDoc(docRef, payLoad)
}
export const handleDelete = async (id) => {
    const docRef = doc(db, 'colors', id)
    await deleteDoc(docRef)
}
export const handleQueryDelete = async () => {
    const userInputName = prompt('Enter a Name')
    // query(collectionRef, actual query)
    const collectionRef = collection(db, 'colors')
    const q = query(collectionRef, where("name", "==", userInputName))

    // We want to fetch the data once, so we use getDocs
    const snapshot = await getDocs(q);

    const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    console.log(results);

    results.forEach(async (result) => {
        const docRef = doc(db, 'colors', result.id)
        await deleteDoc(docRef)
    })
}