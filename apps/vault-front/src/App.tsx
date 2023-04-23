import { useEffect, useRef, useState } from 'react';
import { SearchInput, NotificationList, Loading } from '@ledgerhq/ui';
import { Notifications } from '@ledgerhq/types';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { fetchNotifications } from '@/api/fetchNotifications';

const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<[] | Notifications>([]);

  useEffect(() => {
    const subscription = fromEvent(inputRef.current!, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        debounceTime(500),
      )
      .subscribe((searchText) => setSearchText(searchText));

    return () => subscription.unsubscribe();
  }, []);

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

  return (
    <div className="p-4 sm:p-8 md:p-16 max-w-5xl m-auto">
      <SearchInput ref={inputRef} placeholder="Search by event type" />

      {isLoading ? <Loading /> : <NotificationList notifications={notifications} />}
    </div>
  );
};

export default App;
