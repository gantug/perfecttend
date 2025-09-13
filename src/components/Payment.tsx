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
    } catch {
      // no-op
    }
  };
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl bg-neutral-900/60 px-4 py-3 ring-1 ring-white/10">
      <div>
        <div className="text-sm text-neutral-400">{label}</div>
        <div className="font-medium text-neutral-50 break-all">{value}</div>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
      className={[
        "w-full bg-black px-[5.5%] py-8 md:py-16 text-neutral-100",
        "flex flex-col gap-6",
        className,
      ].join(" ")}
      aria-labelledby="payment-title"
    >
      <header className="space-y-2">
        <h2 id="payment-title" className="text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="text-base md:text-lg text-neutral-300">{subtitle}</p>
      </header>

      <div className="grid grid-cols-1 gap-3">
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
        <div className="rounded-xl bg-amber-500/10 text-amber-200 ring-1 ring-amber-500/20 px-4 py-3 text-sm">
          {note}
        </div>
      ) : null}

      <footer className="pt-2">
        <p className="text-xs text-neutral-400">
          Transfers may take 1–3 business days depending on your bank.
        </p>
      </footer>
    </section>
  );
}
