export function Icon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const common = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  switch (name) {
    case "shirt":
      return <svg {...common}><path d="M8 3l4 2 4-2 4 4-3 3v11H7V10L4 7l4-4z" /></svg>;
    case "type":
      return <svg {...common}><path d="M5 5h14M12 5v14M9 19h6" /></svg>;
    case "sparkles":
      return <svg {...common}><path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" /></svg>;
    case "paw":
      return <svg {...common}><circle cx="12" cy="15" r="3" /><circle cx="6" cy="9" r="1.6" /><circle cx="18" cy="9" r="1.6" /><circle cx="9" cy="6" r="1.4" /><circle cx="15" cy="6" r="1.4" /></svg>;
    case "camera":
      return <svg {...common}><path d="M4 8h3l2-2h6l2 2h3v11H4V8z" /><circle cx="12" cy="13" r="3.5" /></svg>;
    case "mountain":
      return <svg {...common}><path d="M3 19l6-10 4 6 2-3 6 7H3z" /></svg>;
    case "smile":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M8.5 14s1.5 2 3.5 2 3.5-2 3.5-2M9 9h.01M15 9h.01" /></svg>;
    case "wrench":
      return <svg {...common}><path d="M14.7 6.3a4 4 0 00-5.4 5.1L4 16.7 7.3 20l5.3-5.3a4 4 0 005.1-5.4l-2.6 2.6-2-2 2.6-2.6z" /></svg>;
    case "phone":
      return <svg {...common}><path d="M5 4h4l1.5 4L8 10a12 12 0 006 6l2-2.5 4 1.5v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z" /></svg>;
    case "lock":
      return <svg {...common}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "close":
      return <svg {...common}><path d="M6 6l12 12M18 6L6 18" /></svg>;
    case "star":
      return <svg {...common} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9l-6.2 3.5 1.6-6.8L2.2 9l6.9-.7L12 2z" /></svg>;
    case "check":
      return <svg {...common}><path d="M5 12l4 4 10-10" /></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "package":
      return <svg {...common}><path d="M3 8l9-5 9 5-9 5-9-5z" /><path d="M3 8v9l9 5 9-5V8M12 13v9" /></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" /></svg>;
    default:
      return null;
  }
}
