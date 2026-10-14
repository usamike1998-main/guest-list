const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2608";
export const API = BASE_URL + COHORT;

import { createContext, useContext, useEffect, useState } from "react";

const GuestContext = createContext();

export function GuestProvider({ children }) {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    getGuests();
  }, []);

  async function getGuests() {
    try {
      const response = await fetch(API + "/guests");
      const result = await response.json();
      setGuests(result.data);
    } catch (e) {
      console.error(e);
    }
  }
  function deleteSelectedGuest() {
    setSelectedGuest(null);
  }

  async function getGuest(id) {
    try {
      const response = await fetch(API + "/guests/" + id, {
        method: "GET",
      });
      if (!response.ok) {
        throw Error("Something is wrong with response from the server");
      }
      const result = await response.json();
      setSelectedGuest(result.data);
    } catch (e) {
      console.error(e);
    }
  }

  const value = {
    guests,
    selectedGuest,
    getGuests,
    getGuest,
    deleteSelectedGuest,
  };
  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
}

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) throw Error("Game context must be used within GuestProvider.");
  return context;
}
