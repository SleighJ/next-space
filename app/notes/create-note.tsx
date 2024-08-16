'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateNote = () => {
  const [ title, setTitle ] = useState<string>('');
  const [ content, setContent ] = useState<string>('');

  const router = useRouter();

  const addNote = async () => {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/notes/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });
    setTitle('');
    setContent('');
    router.refresh();
  }

  return (
    <form onSubmit={addNote}>
      <h3>Create A New Note</h3>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>
        Create Note
      </button>
    </form>
  )
};

export default CreateNote