import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../utils/api";

export default function useMe() {
  const [me, setMe] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/me`)
      .then((res) => res.json())
      .then((json) => {
        setMe(json.data);
      });
  }, []);

  return { me };
}
