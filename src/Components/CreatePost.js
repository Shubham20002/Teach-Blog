import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import { useFormInput } from '../hooks';

function CreatePost() {
  const title = useFormInput('');
  const subTitle = useFormInput('');
  const content = useFormInput('');

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('title', title);
    console.log('subTitle', subTitle);
    console.log('content', content);

    const docRef = await addDoc(collection(db, "Blog"), {
        Title:title.value,
        SubTitle:subTitle.value,
        Content:content.value,
        CreatedAt:new Date()
      });
      console.log(docRef);
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Sub Title</label>
          <input {...subTitle} />
        </div>

        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
