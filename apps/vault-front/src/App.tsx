import { useEffect, useState } from 'react';
import { TextInput, NotificationList } from '@ledgerhq/ui';
import { Notifications } from '@ledgerhq/types';

import { fetchNotifications } from '@/api/fetchNotifications';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<[] | Notifications>([]);

  useEffect(() => {
    setLoading(true);
    fetchNotifications(searchText)
      .then((notifications) => {
        setNotifications(notifications);
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  }, [searchText, setLoading, setNotifications]);

  const handleChange = (value: string): void => {
    setSearchText(value);
  };

  return (
    <div>
      <TextInput value={searchText} onChange={handleChange} placeholder="Type to filter events" />

      {isLoading ? <div>Loading...</div> : <NotificationList notifications={notifications} />}
    </div>
  );
};

export default App;
