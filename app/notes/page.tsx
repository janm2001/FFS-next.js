import Link from "next/link";
import { getNotes } from "../services/notes";
const NotesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ important?: string }>;
}) => {
  const { important } = await searchParams;
  const showImportant = important === "true";
  const notes = await getNotes(showImportant);
  return (
    <div>
      <h2>Notes</h2>
      <div>
        <Link href={showImportant ? "/notes" : "/notes?important=true"}>
          {showImportant ? "Show all" : "Show important"}
        </Link>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Link href={`/notes/${note.id}`}>{note.content}</Link>
              {note.important && <strong>(important)</strong>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesPage;
