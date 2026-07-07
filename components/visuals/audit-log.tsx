const entries = [
  {
    time: "09:41:07",
    actor: "système",
    action: "Paiement réconcilié",
    ref: "dossier 3310"
  },
  {
    time: "09:38:52",
    actor: "opérateur K.R.",
    action: "Promesse validée en revue",
    ref: "dossier 4821"
  },
  {
    time: "09:32:19",
    actor: "système",
    action: "Relance WhatsApp délivrée",
    ref: "dossier 3310"
  },
  {
    time: "09:24:03",
    actor: "système",
    action: "Escalade en revue humaine",
    ref: "dossier 8323"
  },
  {
    time: "09:12:44",
    actor: "système",
    action: "Créance importée et vérifiée",
    ref: "dossier 9104"
  }
];

export function AuditLog() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-jabby-border bg-jabby-bg/60 px-5 py-3.5">
        <p className="text-sm font-semibold text-jabby-ink">Journal d&apos;audit</p>
        <span className="rounded-full bg-jabby-tintBlue px-2.5 py-1 text-[11px] font-semibold text-jabby-blue">
          Export CSV / API
        </span>
      </div>
      <ul className="divide-y divide-jabby-border/70">
        {entries.map((entry) => (
          <li
            key={entry.time}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-3 sm:grid-cols-[90px_110px_1fr_auto]"
          >
            <span className="text-[11px] tabular-nums text-jabby-faint">
              {entry.time}
            </span>
            <span className="hidden truncate text-[11px] font-medium text-jabby-muted sm:block">
              {entry.actor}
            </span>
            <span className="truncate text-[13px] font-medium text-jabby-ink">
              {entry.action}
            </span>
            <span className="text-[11px] tabular-nums text-jabby-muted">
              {entry.ref}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
