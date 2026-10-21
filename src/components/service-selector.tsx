"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { emailLink, services } from "@/lib/content";

export function ServiceSelector() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const service = services[selected];
  return <div className="service-selector">
    <div className="service-options" role="group" aria-label="Choose your content need">
      {services.map((item, index) => <button key={item.name} aria-pressed={index === selected} aria-controls="service-detail" onClick={() => setSelected(index)}>
        <span>{item.name}</span><span className="service-mark" aria-hidden="true">{index === selected ? "−" : "+"}</span>
      </button>)}
    </div>
    <div id="service-detail" className="service-detail" aria-live="polite" aria-atomic="true">
      <motion.div key={service.name} initial={false} animate={{ opacity: [0.75, 1], y: reduced ? 0 : [8, 0] }} transition={{ duration: 0.3 }}>
        <h3>{service.title}</h3><p>{service.description}</p>
        <ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="service-example">{service.example}</p>
        <a className="button button-light" href={emailLink(service.name.toLowerCase())}>Start a conversation <span aria-hidden="true">↗</span></a>
      </motion.div>
    </div>
    <noscript><div className="no-script-services">{services.slice(1).map(item => <div key={item.name}><h3>{item.name}</h3><p>{item.description}</p><ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul></div>)}</div></noscript>
  </div>;
}
