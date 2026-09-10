import { useState } from "react";

interface Props {
  onEnterApp: () => void;
}

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: "-0.03em",
        color: dark ? "#fff" : "#18181b",
        display: "flex",
        alignItems: "center",
        gap: 7,
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: 6,
          background: "#4f46e5",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="1" y="5" width="2" height="5" rx="1" fill="white" opacity="0.6" />
          <rect x="5" y="3" width="2" height="7" rx="1" fill="white" opacity="0.8" />
          <rect x="9" y="1" width="2" height="9" rx="1" fill="white" />
        </svg>
      </span>
      PulseDesk
    </span>
  );
}

function ProductPreview() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e4e4e7",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
        width: "100%",
        maxWidth: 560,
      }}
    >
      {/* App bar */}
      <div
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid #f0f0ee",
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "#fafaf9",
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fca5a5" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fde68a" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#86efac" }} />
        <span
          style={{
            marginLeft: 10,
            fontSize: 11,
            color: "#a1a1aa",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
          }}
        >
          PulseDesk — Today&apos;s Queue
        </span>
      </div>
      {/* Stats row */}
      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          gap: 10,
          borderBottom: "1px solid #f0f0ee",
        }}
      >
        {[
          { n: "24", l: "Open" },
          { n: "8", l: "Unassigned" },
          { n: "6", l: "Waiting" },
          { n: "10", l: "In progress" },
        ].map((s) => (
          <div
            key={s.l}
            style={{
              flex: 1,
              background: "#f8f8f7",
              borderRadius: 8,
              padding: "8px 10px",
              border: "1px solid #e4e4e7",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 18,
                color: "#18181b",
                lineHeight: 1,
              }}
            >
              {s.n}
            </div>
            <div style={{ fontSize: 10, color: "#71717a", marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>
      {/* Ticket rows */}
      <div>
        {[
          {
            subject: "Order #4821 hasn't arrived",
            customer: "Sarah Mitchell",
            priority: "High",
            assignee: "AM",
            status: "Open",
            time: "8m",
            pColor: "#fee2e2",
            pText: "#dc2626",
          },
          {
            subject: "Wrong size received for order #4792",
            customer: "Daniel Carter",
            priority: "Medium",
            assignee: "MC",
            status: "Open",
            time: "18m",
            pColor: "#fef3c7",
            pText: "#d97706",
          },
          {
            subject: "Refund request for damaged item",
            customer: "Emma Wilson",
            priority: "High",
            assignee: "—",
            status: "Waiting",
            time: "32m",
            pColor: "#fee2e2",
            pText: "#dc2626",
          },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              padding: "9px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: i < 2 ? "1px solid #f4f4f2" : "none",
              fontSize: 12,
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontWeight: 500,
                  color: "#18181b",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: 12,
                }}
              >
                {t.subject}
              </div>
              <div style={{ color: "#71717a", fontSize: 10, marginTop: 1 }}>
                {t.customer} · {t.time} ago
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                padding: "2px 7px",
                borderRadius: 100,
                background: t.pColor,
                color: t.pText,
              }}
            >
              {t.priority}
            </span>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "#ede9fe",
                color: "#6d28d9",
                fontSize: 9,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
              }}
            >
              {t.assignee}
            </div>
            <StatusBadge status={t.status} small />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status, small = false }: { status: string; small?: boolean }) {
  const map: Record<string, { bg: string; text: string }> = {
    Open: { bg: "#dbeafe", text: "#1d4ed8" },
    Waiting: { bg: "#fef9c3", text: "#a16207" },
    "In progress": { bg: "#dcfce7", text: "#15803d" },
    Resolved: { bg: "#f0fdf4", text: "#16a34a" },
  };
  const s = map[status] || { bg: "#f4f4f2", text: "#52525b" };
  return (
    <span
      style={{
        fontSize: small ? 10 : 11,
        fontWeight: 600,
        padding: small ? "1px 6px" : "2px 8px",
        borderRadius: 100,
        background: s.bg,
        color: s.text,
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

function PricingCard({
  name,
  price,
  desc,
  popular,
  features,
  onCta,
}: {
  name: string;
  price: string;
  desc: string;
  popular?: boolean;
  features: string[];
  onCta: () => void;
}) {
  return (
    <div
      style={{
        background: popular ? "#4f46e5" : "#fff",
        border: popular ? "none" : "1px solid #e4e4e7",
        borderRadius: 14,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "relative",
        boxShadow: popular ? "0 8px 32px rgba(79,70,229,0.22)" : "none",
      }}
    >
      {popular && (
        <span
          style={{
            position: "absolute",
            top: -11,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#fff",
            color: "#4f46e5",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "var(--font-display)",
            padding: "3px 12px",
            borderRadius: 100,
            border: "1px solid #c7d2fe",
            letterSpacing: "0.04em",
            whiteSpace: "nowrap",
          }}
        >
          MOST POPULAR
        </span>
      )}
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 15,
            color: popular ? "#c7d2fe" : "#71717a",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 36,
            color: popular ? "#fff" : "#18181b",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {price}
          <span
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: popular ? "#a5b4fc" : "#71717a",
              letterSpacing: 0,
            }}
          >
            /mo
          </span>
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 13,
            color: popular ? "#c7d2fe" : "#71717a",
            lineHeight: 1.5,
          }}
        >
          {desc}
        </div>
      </div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontSize: 13,
              color: popular ? "#e0e7ff" : "#3f3f46",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill={popular ? "rgba(255,255,255,0.15)" : "#f0fdf4"} />
              <path d="M4 7l2 2 4-4" stroke={popular ? "#a5b4fc" : "#16a34a"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onCta}
        style={{
          background: popular ? "#fff" : "#18181b",
          color: popular ? "#4f46e5" : "#fff",
          border: "none",
          borderRadius: 8,
          padding: "11px 20px",
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: 14,
          cursor: "pointer",
          transition: "opacity 0.15s",
          marginTop: "auto",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Get started
      </button>
    </div>
  );
}

export default function LandingPage({ onEnterApp }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#f8f8f7", width: "100%" }}>
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(248,248,247,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e4e4e7",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            height: 60,
            gap: 40,
          }}
        >
          <Logo />
          <div
            className="desktop-nav"
            style={{
              display: "flex",
              gap: 28,
              flex: 1,
            }}
          >
            {["Product", "Pricing", "Customers"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#52525b",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                  transition: "color 0.12s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#18181b")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#52525b")}
              >
                {item}
              </a>
            ))}
            <button
              onClick={onEnterApp}
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#4f46e5",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: 5,
                transition: "opacity 0.12s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              App
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={onEnterApp}
              style={{
                background: "transparent",
                border: "none",
                fontSize: 14,
                fontWeight: 500,
                color: "#52525b",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                padding: "6px 12px",
              }}
            >
              Log in
            </button>
            <button
              onClick={onEnterApp}
              style={{
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                cursor: "pointer",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Start free
            </button>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 6,
                color: "#52525b",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            style={{
              borderTop: "1px solid #e4e4e7",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {["Product", "Pricing", "Customers"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: "#18181b",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={onEnterApp}
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#4f46e5",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-display)",
                padding: 0,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              App
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="hero-section"
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "#ede9fe",
              color: "#6d28d9",
              fontSize: 12,
              fontWeight: 600,
              fontFamily: "var(--font-display)",
              padding: "4px 12px",
              borderRadius: 100,
              marginBottom: 24,
              letterSpacing: "0.04em",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", display: "inline-block" }} />
            Helpdesk for small teams
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#18181b",
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              marginBottom: 20,
              margin: "0 0 20px 0",
            }}
          >
            Support that
            <br />
            stays simple.
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#52525b",
              lineHeight: 1.65,
              maxWidth: 460,
              margin: "0 0 36px 0",
            }}
          >
            A lightweight helpdesk for small teams that want to know what&apos;s happening without managing a call center.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={onEnterApp}
              style={{
                background: "#4f46e5",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 26px",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                cursor: "pointer",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Start free
            </button>
            <button
              onClick={onEnterApp}
              style={{
                background: "transparent",
                color: "#18181b",
                border: "1.5px solid #e4e4e7",
                borderRadius: 8,
                padding: "12px 26px",
                fontSize: 15,
                fontWeight: 600,
                fontFamily: "var(--font-display)",
                cursor: "pointer",
                transition: "border-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#a1a1aa")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e4e4e7")}
            >
              See how it works
            </button>
          </div>
          <p style={{ marginTop: 16, fontSize: 12, color: "#a1a1aa" }}>
            No credit card required · Free for 14 days
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }} className="hero-preview">
          <ProductPreview />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ background: "#fff", borderTop: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "72px 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 32,
              color: "#18181b",
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: 48,
            }}
          >
            Built for small support teams.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              maxWidth: 820,
              margin: "0 auto",
            }}
            className="who-grid"
          >
            <div
              style={{
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: 12,
                padding: "28px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#15803d",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="#16a34a" />
                  <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Built for
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Small support teams of 3–15",
                  "E-commerce businesses",
                  "Online businesses",
                  "Teams that need visibility without complexity",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 14, color: "#166534", lineHeight: 1.4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "#fff7ed",
                border: "1px solid #fed7aa",
                borderRadius: 12,
                padding: "28px 28px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#c2410c",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="#ea580c" />
                  <path d="M5 5l4 4M9 5l-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                Not for
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Large call centers",
                  "Enterprise support departments",
                  "Complex multi-layer workflows",
                  "Teams needing dozens of advanced workflows",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 14, color: "#9a3412", lineHeight: 1.4 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE BENEFITS */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: 32,
            color: "#18181b",
            letterSpacing: "-0.03em",
            textAlign: "center",
            marginBottom: 52,
          }}
        >
          Everything you need. Nothing you don&apos;t.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
          className="benefits-grid"
        >
          {[
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2" width="18" height="18" rx="4" stroke="#4f46e5" strokeWidth="1.5" />
                  <path d="M7 11h8M7 7h4M7 15h6" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              num: "01",
              title: "See the queue",
              desc: "Know what needs attention today. Your team's support queue is always visible, always current.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="8" r="4" stroke="#4f46e5" strokeWidth="1.5" />
                  <path d="M4 19c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M16 6l2 2 3-3" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              num: "02",
              title: "Know who's handling it",
              desc: "Keep ownership clear without extra management overhead. Every ticket has a clear owner.",
            },
            {
              icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 6h14M4 10h10M4 14h12" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 15l-4 4-2-2" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              num: "03",
              title: "Resolve without clutter",
              desc: "Give your team the context they need without a complicated workspace. Clean. Focused. Done.",
            },
          ].map((b) => (
            <div
              key={b.num}
              style={{
                background: "#fff",
                border: "1px solid #e4e4e7",
                borderRadius: 14,
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "#ede9fe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {b.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#18181b",
                    marginBottom: 8,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {b.title}
                </div>
                <div style={{ fontSize: 14, color: "#52525b", lineHeight: 1.6 }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        style={{
          background: "#fff",
          borderTop: "1px solid #e4e4e7",
          borderBottom: "1px solid #e4e4e7",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 32,
              color: "#18181b",
              letterSpacing: "-0.03em",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Simple, honest pricing.
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#71717a",
              fontSize: 15,
              marginBottom: 52,
            }}
          >
            No contracts. No hidden fees. Cancel anytime.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              maxWidth: 900,
              margin: "0 auto",
              alignItems: "center",
            }}
            className="pricing-grid"
          >
            <PricingCard
              name="Solo"
              price="$12"
              desc="For individuals and very small support operations."
              features={["1 agent seat", "Unified inbox", "Ticket priorities", "Email integration", "14-day history"]}
              onCta={onEnterApp}
            />
            <PricingCard
              name="Team"
              price="$39"
              desc="For small support teams that need shared visibility."
              popular
              features={[
                "Up to 10 agent seats",
                "Team queue view",
                "Assignment & ownership",
                "Priority & status filters",
                "Unlimited history",
              ]}
              onCta={onEnterApp}
            />
            <PricingCard
              name="Growing"
              price="$79"
              desc="For growing teams that need more capacity and reporting."
              features={[
                "Up to 25 agent seats",
                "Everything in Team",
                "Basic reports",
                "API access",
                "Priority support",
              ]}
              onCta={onEnterApp}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "100px 24px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#18181b",
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Give your team a calmer
          <br />
          support queue.
        </h2>
        <p style={{ color: "#71717a", fontSize: 16, marginBottom: 36 }}>
          Join hundreds of small teams that resolved their support without the enterprise overhead.
        </p>
        <button
          onClick={onEnterApp}
          style={{
            background: "#4f46e5",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px 36px",
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "var(--font-display)",
            cursor: "pointer",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Start free
        </button>
        <p style={{ marginTop: 14, fontSize: 13, color: "#a1a1aa" }}>
          Free for 14 days · No credit card required
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid #e4e4e7",
          padding: "32px 24px",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Logo />
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Privacy", "Terms", "Security", "Status"].map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontSize: 13,
                  color: "#71717a",
                  textDecoration: "none",
                  fontFamily: "var(--font-display)",
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#a1a1aa" }}>
            © 2026 PulseDesk
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding-top: 48px !important;
            padding-bottom: 40px !important;
          }
          .hero-preview {
            justify-content: center !important;
          }
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .who-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
