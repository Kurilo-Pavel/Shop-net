import {doc, setDoc} from "firebase/firestore";
import {db} from "../../firebase";

const h=require(`../Gallery/Items.json`)
  const han = () => {
    h.map((item,index ) => {
      setDoc(doc(db, 'Items', `${index}`), {
        id: index,
        collection: item.collection,
        name: item.name,
        img: item.img,
        price: item.price,
        aboutThisItem: item.aboutThisItem,
      })
    })
    console.log('r')
  }