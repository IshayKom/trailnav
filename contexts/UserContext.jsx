import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { Client, Account, ID, Models } from "react-native-appwrite";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function login(email, password) {
    try {
      await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      setUser(await account.get());
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function register(email, password, name) {
    try {
      await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });
      await login(email, password);
    } catch (error) {
      throw Error(error.message)
    }
  }
  async function logout() {
    try{
    await account.deleteSession('current');
    setUser(null);
    } catch (error) {
      throw Error(error.message)
    }
  }

  async function getInitialUserValue() {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthChecked(true); // Mark that auth check is complete
    }
  }

  useEffect(() => {
    getInitialUserValue();
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout, authChecked }}>
      {children}
    </UserContext.Provider>
  );
}
