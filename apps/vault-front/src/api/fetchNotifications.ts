import { envVars } from '@ledgerhq/config';
import { Notifications } from '@ledgerhq/types';

export const fetchNotifications = async (searchText: string): Promise<Notifications | []> => {
  try {
    const res = await fetch(`${envVars.VAULT_API_URL}/search?q=${searchText}`);
    const data: Notifications = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
