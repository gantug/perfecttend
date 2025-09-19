// PaymentSection.tsx

type Props = {
  title?: string;
  subtitle?: string;
  accountHolder: string;
  iban: string;
  bic: string;
  bankName?: string;
  note?: string;
  className?: string;
};

function formatIban(iban: string) {
  return iban
    .replace(/\s+/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function FieldRow({
  label,
  value,
  copyValue,
  ariaLabel,
}: {
  label: string;
  value: string;
  copyValue?: string;
  ariaLabel?: string;
}) {
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
    } catch {}
  };

  return (
    <div className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      <div>
        <div className="text-sm text-white/60">{label}</div>
        <div className="font-medium text-white break-all">{value}</div>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="relative shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00E0FF]"
        aria-label={ariaLabel ?? `Copy ${label}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 fill-current"
        >
          <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10V1Zm3 4H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h9v14Z" />
        </svg>
        Copy
      </button>
    </div>
  );
}

export default function PaymentSection({
  title = "To make payment",
  subtitle = "Account details are:",
  accountHolder,
  iban,
  bic,
  bankName,
  note,
  className = "",
}: Props) {
  const formattedIban = formatIban(iban);

  return (
    <section
      aria-labelledby="payment-title"
      className={[
        "relative isolate overflow-hidden w-full px-[5.5%] py-16 md:py-24 bg-[#070B2A]",
        className,
      ].join(" ")}
    >
      {/* smooth edge overlay (requires .noise-container in globals.css) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      {/* grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15 z-0"
      >
        <defs>
          <pattern
            id="pay-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="white"
              strokeOpacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pay-grid)" />
      </svg>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto max-w-6xl flex flex-col gap-6">
        <header className="space-y-2">
          <h2
            id="payment-title"
            className="text-3xl md:text-5xl text-white mb-4"
          >
            {title}
          </h2>
          <p className="text-base md:text-lg text-white/80">{subtitle}</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          <FieldRow label="Account holder" value={accountHolder} />
          {bankName ? <FieldRow label="Bank" value={bankName} /> : null}
          <FieldRow
            label="IBAN"
            value={formattedIban}
            copyValue={iban.replace(/\s+/g, "")}
            ariaLabel="Copy IBAN"
          />
          <FieldRow label="BIC" value={bic} ariaLabel="Copy BIC" />
        </div>

        {note ? (
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-200 px-4 py-3 text-sm">
            {note}
          </div>
        ) : null}

        <footer className="pt-1">
          <p className="text-xs text-white/60">
            Transfers may take 1–3 business days depending on your bank.
          </p>
        </footer>
      </div>
    </section>
  );
}
