import React, { useEffect, useState } from "react";

export const SessionContext = React.createContext({});

export function SessionProvider(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("id");

    if (userId) setUser({ ...localStorage });
    else setUser({});
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {props.children}
    </SessionContext.Provider>
  );
}

export const useSession = () => React.useContext(SessionContext);
