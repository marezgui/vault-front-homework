import { useEffect, useState } from 'react';
import { SearchInput, NotificationList, Loading } from '@ledgerhq/ui';
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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [searchText, setLoading, setNotifications]);

  const handleChange = (value: string): void => {
    setSearchText(value);
  };

  return (
    <div className="p-4 sm:p-8 md:p-16 max-w-5xl m-auto">
      <SearchInput value={searchText} onChange={handleChange} placeholder="Search by event type" />

      {isLoading ? <Loading /> : <NotificationList notifications={notifications} />}
    </div>
  );
};

export default App;
