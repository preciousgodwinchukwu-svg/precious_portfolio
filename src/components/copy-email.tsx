"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try { await navigator.clipboard.writeText(profile.email); setStatus("Email copied."); }
    catch { setStatus("Select the email address above to copy it, or tap it to write an email."); }
  }
  return <div className="copy-email"><button className="text-link" onClick={copy}>Copy email address</button><span role="status">{status}</span></div>;
}
