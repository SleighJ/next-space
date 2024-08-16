import Link from "next/link";
import CreateNote from "./create-note";

const getNotes = async() => {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any;
};

const NotesPage = async() => {
  const notes = await getNotes();
  return (
    <div>
      hi jj
      {notes?.map((note: any, i: number) => {
        const noteKey = `${i}-${note.id}`;
        const { content } = note;
        return (
          <Note key={noteKey} note={note} />
        )
      })}
      <CreateNote />
    </div>
  );
};

const Note = ({
  note,
}: any) => {
  const { id, title, content, created } = note || {};
  return(
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  )
}

export default NotesPage
