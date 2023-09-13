import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../utils/api";

export default function useSuggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/suggestions`)
      .then((res) => res.json())
      .then((json) => {
        setSuggestions(json.data);
      });
  }, []);

  return { suggestions };
}
