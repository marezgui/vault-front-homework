import { useEffect, useState } from "react";
import { TextInput } from "@ledgerhq/ui";

const API = "http://localhost:4000";

type NotificationData = {
  id: number;
  amount?: number;
  unit?: string;
  from?: string;
  to?: string;
  name?: string;
  currency?: string;
};

type Notification = {
  id: string;
  type: string;
  data: NotificationData;
};

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notification[]>(null);

  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const res = await fetch(`${API}/search?q=${searchText}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    };
    effect();
  }, [searchText, setLoading, setResults]);

  return (
    <div>
      <TextInput
        value={searchText}
        onChange={setSearchText}
        placeholder="Type to filter events"
      />

      {isLoading ? (
        <div>{"Loading..."}</div>
      ) : results ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <div className="border border-dashed">{JSON.stringify(r)}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
