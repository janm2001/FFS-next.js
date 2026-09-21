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
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Notes</h2>
      <div>
        <Link
          href={showImportant ? "/notes" : "/notes?important=true"}
          className="text-blue-600 hover:underline"
        >
          {showImportant ? "Show all" : "Show important"}
        </Link>
        <ul className="space-y-4 my-2">
          {notes.map((note) => (
            <li key={note.id} className="border rounded p-3 hover:bg-gray-50">
              <Link
                className="text-blue-600 hover:underline"
                href={`/notes/${note.id}`}
              >
                {note.content}
              </Link>
              {note.important && (
                <strong className="ml-2 text-amber-600">(important)</strong>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesPage;
