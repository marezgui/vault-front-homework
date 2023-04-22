import { useEffect, useState } from 'react';
import { TextInput } from '@ledgerhq/ui';
import { envVars } from '@ledgerhq/config';

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
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<null | Notification[]>(null);

  useEffect(() => {
    const effect = async () => {
      setLoading(true);
      const res = await fetch(`${envVars.VAULT_API_URL}/search?q=${searchText}`);
      const data = await res.json();
      setResults(data);
      setLoading(false);
    };
    effect();
  }, [searchText, setLoading, setResults]);

  return (
    <div>
      <TextInput value={searchText} onChange={setSearchText} placeholder="Type to filter events" />

      {isLoading ? (
        <div>Loading...</div>
      ) : results ? (
        <div>
          {results.map((r) => (
            // TODO we must finalize this integration!! not very pretty like this
            <div key={r.id} className="border border-dashed">
              {JSON.stringify(r)}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;
