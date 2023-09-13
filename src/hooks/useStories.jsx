import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../utils/api";

export default function useStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/stories`)
      .then((res) => res.json())
      .then((json) => {
        setStories(json.data);
      });
  }, []);

  return { stories };
}
