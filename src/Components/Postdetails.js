import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { db } from '../firebase'

function Postdetail() {

    const [post, setPost] = useState({});
    const {id} = useParams();

   useEffect( ()=>  {
    async function getdata(){
        const docRef = await doc(db, "Blog", id);
        const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // docSnap.data() will be undefined in this case
        //     console.log("No such document!");
        // }
        setPost(docSnap.data())

    }
        
getdata();   
    },[id])

    return (
        <>
            <div className="post-detail">
                <h1>{post.Title}</h1>
                <p>{post.Content}</p>
            </div>

        </>
    );
}

export default Postdetail;