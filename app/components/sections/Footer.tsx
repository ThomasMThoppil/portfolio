import { Logo } from "@/app/components/icons";

export function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-3"
      style={{
        padding: "26px clamp(24px,7vw,100px)",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
        transition: "background 0.4s",
      }}
    >
      <div className="flex items-center gap-[10px]" style={{ color: "var(--text)" }}>
        <Logo size={22} />
        <span className="serif font-semibold text-[15px]">Varun Dubey</span>
      </div>
      <p className="mono" style={{ color: "var(--muted)", fontSize: 11 }}>
        varundubeyyy.com · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
