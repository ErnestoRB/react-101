import { useEffect } from "react";
import { useState } from "react";
import { API_URL } from "../utils/api";

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/posts`)
      .then((res) => res.json()) // convertir a json el cuerpo de la respuesta
      .then((json) => {
        setPosts(json.data); // del objeto javascript, obtener el atributo 'data
      });
  }, []);

  return { posts };
}
