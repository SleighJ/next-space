const getNote = async (noteId: number) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

const NotePage = async({ params }: any) => {
  const note = await getNote(params.id);
  // const { id, note, title, content, created } = note;

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  )
}

export default NotePage
