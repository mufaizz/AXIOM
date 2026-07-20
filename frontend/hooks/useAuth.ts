
import { useState, useEffect } from "react";
import { api, endpoints } from "@/lib/api";

export function useAuth() {
  const [user, setUser] = useState<null | { id: string; name: string; email: string }>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(endpoints.auth.me);
        setUser(data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const { data } = await api.post(endpoints.auth.login, { email, password });
    localStorage.setItem("mv_token", data.access_token);
    setUser(data.user);
  };

  const register = async (name: string, email: string, password: string) => {
    const { data } = await api.post(endpoints.auth.register, { name, email, password });
    localStorage.setItem("mv_token", data.access_token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("mv_token");
    setUser(null);
  };

  return { user, loading, login, register, logout };
}
