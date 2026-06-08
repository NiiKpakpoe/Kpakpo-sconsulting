export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-16 pb-8 px-6 md:px-16 lg:px-24"
      style={{
        background: "#060e1a",
        borderTop: "1px solid rgba(196,148,90,0.2)",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <span
            className="text-3xl font-black tracking-tighter"
            style={{ color: "#F8F6F2", letterSpacing: "-0.04em" }}
          >
            APEX
          </span>
          <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(248,246,242,0.45)" }}>
            Shaping the future of business, one bold partnership at a time.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: "#C4945A" }}>
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {["Strategy", "Digital", "Operations", "Leadership"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm font-light underline-draw" style={{ color: "rgba(248,246,242,0.5)" }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: "#C4945A" }}>
            Company
          </h3>
          <ul className="flex flex-col gap-3">
            {["About", "Work", "Team", "Insights"].map((s) => (
              <li key={s}>
                <a href="#" className="text-sm font-light underline-draw" style={{ color: "rgba(248,246,242,0.5)" }}>
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xs tracking-[0.3em] uppercase font-semibold" style={{ color: "#C4945A" }}>
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a href="mailto:hello@apexconsulting.com" className="text-sm font-light underline-draw" style={{ color: "rgba(248,246,242,0.5)" }}>
                hello@apex.consulting
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-light underline-draw" style={{ color: "rgba(248,246,242,0.5)" }}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-sm font-light underline-draw" style={{ color: "rgba(248,246,242,0.5)" }}>
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
        style={{ borderTop: "1px solid rgba(248,246,242,0.06)" }}
      >
        <p className="text-xs font-light" style={{ color: "rgba(248,246,242,0.3)" }}>
          &copy; {year} APEX Consulting. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use"].map((link) => (
            <a key={link} href="#" className="text-xs font-light underline-draw" style={{ color: "rgba(248,246,242,0.3)" }}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
