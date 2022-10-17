import db from "./firebase-config";
import { useEffect, useState } from "react";
import { onSnapshot, collection, setDoc, addDoc, doc } from "firebase/firestore";
import { handleNew, handleEdit, handleDelete, handleQueryDelete } from "./util"
import Dot
  from "./Dot";




function App() {

  const [colors, setColors] = useState([]);


  useEffect(() => {
    onSnapshot(collection(db, 'colors'), (snapshot) => {
      setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, []
  )




  return (
    <div className="App">
      <button onClick={handleNew}>New</button>
      <button onClick={handleQueryDelete}>Query Delete</button>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>
            <button onClick={() => handleEdit(color.id)}>edit</button>
            <button onClick={() => handleDelete(color.id)}>Delete</button>
            <Dot color={color.value} /> {color.name}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
