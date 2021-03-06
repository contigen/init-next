import { parseISO, format } from "date-fns";
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-xl text-gray-400">
      {format(date, `LLLL, d,yyyy`)}
    </time>
  );
}
