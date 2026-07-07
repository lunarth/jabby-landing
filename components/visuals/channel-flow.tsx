import { Banknote, Mail, MessageCircle, MessageSquare, Phone } from "lucide-react";

const channels = [
  { icon: Phone, label: "Appel", y: 60 },
  { icon: MessageCircle, label: "WhatsApp", y: 150 },
  { icon: MessageSquare, label: "SMS", y: 240 },
  { icon: Mail, label: "Email", y: 330 }
];

/*
 * First-party flow schematic. Animated dashes travel from the creditor's
 * brand through each channel and converge on the payment node. Pure SVG +
 * CSS, disabled under prefers-reduced-motion.
 */
export function ChannelFlow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jabby-border bg-white p-4 shadow-card sm:p-6">
      <svg
        viewBox="0 0 760 390"
        className="h-auto w-full"
        role="img"
        aria-label="Schéma du flux multicanal : les relances partent au nom de votre entreprise par appel, WhatsApp, SMS et email, et convergent vers le règlement"
      >
        <defs>
          <linearGradient id="flow-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1B4B9B" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1B4B9B" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* Left node: the creditor's brand */}
        <g>
          <rect
            x="16"
            y="150"
            width="168"
            height="90"
            rx="14"
            fill="#FFFFFF"
            stroke="#E5E7EB"
          />
          <rect x="34" y="170" width="34" height="34" rx="9" fill="#EEF3FB" />
          <text
            x="51"
            y="193"
            textAnchor="middle"
            fill="#1B4B9B"
            fontSize="16"
            fontWeight="700"
          >
            V
          </text>
          <text x="80" y="186" fill="#111827" fontSize="13.5" fontWeight="600">
            Votre entreprise
          </text>
          <text x="80" y="204" fill="#6B7280" fontSize="11">
            Vos numéros dédiés
          </text>
          <text x="34" y="228" fill="#9CA3AF" fontSize="10" fontWeight="600" letterSpacing="1.4">
            EXPÉDITEUR
          </text>
        </g>

        {/* Paths from brand to each channel */}
        {channels.map((channel, index) => (
          <path
            key={`in-${channel.label}`}
            d={`M184 195 C 250 195, 250 ${channel.y + 27}, 306 ${channel.y + 27}`}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
            className="flow-track"
            data-index={index}
          />
        ))}
        {channels.map((channel, index) => (
          <path
            key={`in-dash-${channel.label}`}
            d={`M184 195 C 250 195, 250 ${channel.y + 27}, 306 ${channel.y + 27}`}
            fill="none"
            stroke="url(#flow-stroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-dash"
            style={{ animationDelay: `${index * 0.9}s` }}
          />
        ))}

        {/* Channel nodes */}
        {channels.map((channel) => (
          <g key={channel.label}>
            <rect
              x="306"
              y={channel.y}
              width="148"
              height="54"
              rx="12"
              fill="#FFFFFF"
              stroke="#E5E7EB"
            />
            <foreignObject x="318" y={channel.y + 13} width="30" height="30">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-jabby-tintBlue text-jabby-blue">
                <channel.icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
              </span>
            </foreignObject>
            <text
              x="356"
              y={channel.y + 33}
              fill="#111827"
              fontSize="13"
              fontWeight="600"
            >
              {channel.label}
            </text>
          </g>
        ))}

        {/* Paths from channels to payment */}
        {channels.map((channel) => (
          <path
            key={`out-${channel.label}`}
            d={`M454 ${channel.y + 27} C 520 ${channel.y + 27}, 520 195, 576 195`}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
        ))}
        {channels.map((channel, index) => (
          <path
            key={`out-dash-${channel.label}`}
            d={`M454 ${channel.y + 27} C 520 ${channel.y + 27}, 520 195, 576 195`}
            fill="none"
            stroke="url(#flow-stroke)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="flow-dash"
            style={{ animationDelay: `${0.45 + index * 0.9}s` }}
          />
        ))}

        {/* Right node: payment */}
        <g>
          <rect
            x="576"
            y="150"
            width="168"
            height="90"
            rx="14"
            fill="#1B4B9B"
          />
          <foreignObject x="594" y="170" width="34" height="34">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white/15 text-white">
              <Banknote className="h-4 w-4" strokeWidth={1.8} aria-hidden />
            </span>
          </foreignObject>
          <text x="640" y="186" fill="#FFFFFF" fontSize="13.5" fontWeight="600">
            Règlement
          </text>
          <text x="640" y="204" fill="rgba(255,255,255,0.65)" fontSize="11">
            Paiement sécurisé
          </text>
          <text x="594" y="228" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600" letterSpacing="1.4">
            RÉSOLUTION
          </text>
        </g>
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-jabby-border pt-4">
        <p className="text-[13px] font-medium text-jabby-ink">
          Un lien de paiement dans chaque relance
        </p>
        <p className="text-[12px] text-jabby-muted">
          Séquence type : appel, puis WhatsApp, SMS et email en rattrapage
        </p>
      </div>
    </div>
  );
}
