
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      const message = 
        err.response?.data?.detail || 
        err.response?.data?.message || 
        err.message || 
        "Login failed";
      setErr(message);
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto mt-20 max-w-sm space-y-4 rounded-lg bg-ink-soft p-6">
      <h1 className="text-xl font-semibold text-white">Login</h1>
      {err && <div className="text-sm text-red-400">{err}</div>}
      <Input type="email" placeholder="Email" value={email || ""} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password" value={password || ""} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)} />
      <Button type="submit" className="w-full">Login</Button>
    </form>
  );
}
