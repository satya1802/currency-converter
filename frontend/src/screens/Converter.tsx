// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search, Clock, Filter, AlertCircle } = Icons;

const PRODUCT = "currency converter";
const SCREEN = "Currency Converter";
const mix = (colour, percent) => `color-mix(in srgb, ${colour} ${percent}%, transparent)`;

// Latest rate_snapshot served to the page (read from the Redis cache, never the provider).
const SNAPSHOT = {
  id: "rs_2026_10_29_0900",
  base_currency: "USD",
  source: "Open Exchange Rates",
  fetched_at: "29 Oct 2026, 09:00 UTC",
  age_minutes: 52,
  next_refresh: "10:00 UTC",
  cache: "Redis",
};

// ISO 4217 fiat set as published by Open Exchange Rates. [code, name, units per 1 USD, region]
const CURRENCIES = [
  ["AED", "UAE Dirham", 3.6725, "AF"],
  ["AFN", "Afghan Afghani", 71.5, "AP"],
  ["ALL", "Albanian Lek", 92.4, "EU"],
  ["AMD", "Armenian Dram", 387.5, "AP"],
  ["ANG", "Netherlands Antillean Guilder", 1.79, "AM"],
  ["AOA", "Angolan Kwanza", 912.5, "AF"],
  ["ARS", "Argentine Peso", 985.0, "AM"],
  ["AUD", "Australian Dollar", 1.524, "AP"],
  ["AWG", "Aruban Florin", 1.8, "AM"],
  ["AZN", "Azerbaijani Manat", 1.7, "AP"],
  ["BAM", "Bosnia-Herzegovina Convertible Mark", 1.803, "EU"],
  ["BBD", "Barbadian Dollar", 2.0, "AM"],
  ["BDT", "Bangladeshi Taka", 119.8, "AP"],
  ["BGN", "Bulgarian Lev", 1.8028, "EU"],
  ["BHD", "Bahraini Dinar", 0.376, "AF"],
  ["BIF", "Burundian Franc", 2890.0, "AF"],
  ["BMD", "Bermudan Dollar", 1.0, "AM"],
  ["BND", "Brunei Dollar", 1.318, "AP"],
  ["BOB", "Bolivian Boliviano", 6.91, "AM"],
  ["BRL", "Brazilian Real", 5.69, "AM"],
  ["BSD", "Bahamian Dollar", 1.0, "AM"],
  ["BTN", "Bhutanese Ngultrum", 84.05, "AP"],
  ["BWP", "Botswanan Pula", 13.42, "AF"],
  ["BYN", "Belarusian Ruble", 3.27, "EU"],
  ["BZD", "Belize Dollar", 2.015, "AM"],
  ["CAD", "Canadian Dollar", 1.389, "AM"],
  ["CDF", "Congolese Franc", 2855.0, "AF"],
  ["CHF", "Swiss Franc", 0.865, "EU"],
  ["CLP", "Chilean Peso", 962.0, "AM"],
  ["CNY", "Chinese Yuan", 7.124, "AP"],
  ["COP", "Colombian Peso", 4380.0, "AM"],
  ["CRC", "Costa Rican Colón", 512.0, "AM"],
  ["CUP", "Cuban Peso", 24.0, "AM"],
  ["CVE", "Cape Verdean Escudo", 101.6, "AF"],
  ["CZK", "Czech Koruna", 23.32, "EU"],
  ["DJF", "Djiboutian Franc", 177.7, "AF"],
  ["DKK", "Danish Krone", 6.874, "EU"],
  ["DOP", "Dominican Peso", 60.35, "AM"],
  ["DZD", "Algerian Dinar", 133.5, "AF"],
  ["EGP", "Egyptian Pound", 48.6, "AF"],
  ["ERN", "Eritrean Nakfa", 15.0, "AF"],
  ["ETB", "Ethiopian Birr", 121.4, "AF"],
  ["EUR", "Euro", 0.9212, "EU"],
  ["FJD", "Fijian Dollar", 2.256, "AP"],
  ["FKP", "Falkland Islands Pound", 0.7705, "AM"],
  ["GBP", "British Pound", 0.7705, "EU"],
  ["GEL", "Georgian Lari", 2.73, "AP"],
  ["GGP", "Guernsey Pound", 0.7705, "EU"],
  ["GHS", "Ghanaian Cedi", 16.05, "AF"],
  ["GIP", "Gibraltar Pound", 0.7705, "EU"],
  ["GMD", "Gambian Dalasi", 70.5, "AF"],
  ["GNF", "Guinean Franc", 8620.0, "AF"],
  ["GTQ", "Guatemalan Quetzal", 7.73, "AM"],
  ["GYD", "Guyanaese Dollar", 209.2, "AM"],
  ["HKD", "Hong Kong Dollar", 7.772, "AP"],
  ["HNL", "Honduran Lempira", 25.1, "AM"],
  ["HRK", "Croatian Kuna", 6.94, "EU"],
  ["HTG", "Haitian Gourde", 131.5, "AM"],
  ["HUF", "Hungarian Forint", 371.8, "EU"],
  ["IDR", "Indonesian Rupiah", 15720.0, "AP"],
  ["ILS", "Israeli New Shekel", 3.745, "AF"],
  ["IMP", "Manx Pound", 0.7705, "EU"],
  ["INR", "Indian Rupee", 84.08, "AP"],
  ["IQD", "Iraqi Dinar", 1310.0, "AF"],
  ["IRR", "Iranian Rial", 42100.0, "AF"],
  ["ISK", "Icelandic Króna", 137.4, "EU"],
  ["JEP", "Jersey Pound", 0.7705, "EU"],
  ["JMD", "Jamaican Dollar", 158.6, "AM"],
  ["JOD", "Jordanian Dinar", 0.709, "AF"],
  ["JPY", "Japanese Yen", 152.4, "AP"],
  ["KES", "Kenyan Shilling", 129.0, "AF"],
  ["KGS", "Kyrgystani Som", 86.2, "AP"],
  ["KHR", "Cambodian Riel", 4065.0, "AP"],
  ["KMF", "Comorian Franc", 453.2, "AF"],
  ["KPW", "North Korean Won", 900.0, "AP"],
  ["KRW", "South Korean Won", 1382.0, "AP"],
  ["KWD", "Kuwaiti Dinar", 0.3065, "AF"],
  ["KYD", "Cayman Islands Dollar", 0.833, "AM"],
  ["KZT", "Kazakhstani Tenge", 487.5, "AP"],
  ["LAK", "Laotian Kip", 21950.0, "AP"],
  ["LBP", "Lebanese Pound", 89500.0, "AF"],
  ["LKR", "Sri Lankan Rupee", 293.4, "AP"],
  ["LRD", "Liberian Dollar", 193.5, "AF"],
  ["LSL", "Lesotho Loti", 17.62, "AF"],
  ["LYD", "Libyan Dinar", 4.865, "AF"],
  ["MAD", "Moroccan Dirham", 9.875, "AF"],
  ["MDL", "Moldovan Leu", 17.85, "EU"],
  ["MGA", "Malagasy Ariary", 4620.0, "AF"],
  ["MKD", "Macedonian Denar", 56.72, "EU"],
  ["MMK", "Myanmar Kyat", 2098.0, "AP"],
  ["MNT", "Mongolian Tugrik", 3398.0, "AP"],
  ["MOP", "Macanese Pataca", 8.005, "AP"],
  ["MRU", "Mauritanian Ouguiya", 39.75, "AF"],
  ["MUR", "Mauritian Rupee", 46.35, "AF"],
  ["MVR", "Maldivian Rufiyaa", 15.42, "AP"],
  ["MWK", "Malawian Kwacha", 1735.0, "AF"],
  ["MXN", "Mexican Peso", 19.92, "AM"],
  ["MYR", "Malaysian Ringgit", 4.372, "AP"],
  ["MZN", "Mozambican Metical", 63.9, "AF"],
  ["NAD", "Namibian Dollar", 17.62, "AF"],
  ["NGN", "Nigerian Naira", 1645.0, "AF"],
  ["NIO", "Nicaraguan Córdoba", 36.8, "AM"],
  ["NOK", "Norwegian Krone", 10.98, "EU"],
  ["NPR", "Nepalese Rupee", 134.5, "AP"],
  ["NZD", "New Zealand Dollar", 1.672, "AP"],
  ["OMR", "Omani Rial", 0.3845, "AF"],
  ["PAB", "Panamanian Balboa", 1.0, "AM"],
  ["PEN", "Peruvian Sol", 3.765, "AM"],
  ["PGK", "Papua New Guinean Kina", 3.945, "AP"],
  ["PHP", "Philippine Peso", 58.2, "AP"],
  ["PKR", "Pakistani Rupee", 277.8, "AP"],
  ["PLN", "Polish Złoty", 3.998, "EU"],
  ["PYG", "Paraguayan Guarani", 7820.0, "AM"],
  ["QAR", "Qatari Rial", 3.64, "AF"],
  ["RON", "Romanian Leu", 4.584, "EU"],
  ["RSD", "Serbian Dinar", 107.8, "EU"],
  ["RUB", "Russian Ruble", 97.2, "EU"],
  ["RWF", "Rwandan Franc", 1358.0, "AF"],
  ["SAR", "Saudi Riyal", 3.751, "AF"],
  ["SBD", "Solomon Islands Dollar", 8.42, "AP"],
  ["SCR", "Seychellois Rupee", 13.62, "AF"],
  ["SDG", "Sudanese Pound", 601.5, "AF"],
  ["SEK", "Swedish Krona", 10.62, "EU"],
  ["SGD", "Singapore Dollar", 1.319, "AP"],
  ["SHP", "St. Helena Pound", 0.7705, "AF"],
  ["SLE", "Sierra Leonean Leone", 22.65, "AF"],
  ["SOS", "Somali Shilling", 571.0, "AF"],
  ["SRD", "Surinamese Dollar", 35.2, "AM"],
  ["SSP", "South Sudanese Pound", 3120.0, "AF"],
  ["STN", "São Tomé & Príncipe Dobra", 22.58, "AF"],
  ["SYP", "Syrian Pound", 12560.0, "AF"],
  ["SZL", "Swazi Lilangeni", 17.62, "AF"],
  ["THB", "Thai Baht", 33.75, "AP"],
  ["TJS", "Tajikistani Somoni", 10.65, "AP"],
  ["TMT", "Turkmenistani Manat", 3.5, "AP"],
  ["TND", "Tunisian Dinar", 3.105, "AF"],
  ["TOP", "Tongan Paʻanga", 2.365, "AP"],
  ["TRY", "Turkish Lira", 34.28, "EU"],
  ["TTD", "Trinidad & Tobago Dollar", 6.785, "AM"],
  ["TWD", "New Taiwan Dollar", 32.05, "AP"],
  ["TZS", "Tanzanian Shilling", 2712.0, "AF"],
  ["UAH", "Ukrainian Hryvnia", 41.25, "EU"],
  ["UGX", "Ugandan Shilling", 3665.0, "AF"],
  ["USD", "US Dollar", 1.0, "AM"],
  ["UYU", "Uruguayan Peso", 40.15, "AM"],
  ["UZS", "Uzbekistani Som", 12780.0, "AP"],
  ["VES", "Venezuelan Bolívar", 39.85, "AM"],
  ["VND", "Vietnamese Dong", 25380.0, "AP"],
  ["VUV", "Vanuatu Vatu", 118.8, "AP"],
  ["WST", "Samoan Tala", 2.745, "AP"],
  ["XAF", "Central African CFA Franc", 604.3, "AF"],
  ["XCD", "East Caribbean Dollar", 2.7025, "AM"],
  ["XOF", "West African CFA Franc", 604.3, "AF"],
  ["XPF", "CFP Franc", 109.9, "AP"],
  ["YER", "Yemeni Rial", 250.1, "AF"],
  ["ZAR", "South African Rand", 17.62, "AF"],
  ["ZMW", "Zambian Kwacha", 26.55, "AF"],
  ["ZWL", "Zimbabwean Dollar", 26.4, "AF"],
];

const RATE = Object.fromEntries(CURRENCIES.map((c) => [c[0], c[2]]));
const NAME = Object.fromEntries(CURRENCIES.map((c) => [c[0], c[1]]));
const REGION_LABEL = { AM: "Americas", EU: "Europe", AP: "Asia-Pacific", AF: "Africa & ME" };
const VIEWS = [
  ["All", "All"],
  ["AM", "Americas"],
  ["EU", "Europe"],
  ["AP", "Asia-Pacific"],
  ["AF", "Africa & ME"],
];

// ISO 4217 minor units that are not 2.
const DEC0 = ["BIF", "CLP", "DJF", "GNF", "ISK", "JPY", "KMF", "KRW", "PYG", "RWF", "UGX", "VND", "VUV", "XAF", "XOF", "XPF"];
const DEC3 = ["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"];
const decimalsFor = (code) => (DEC0.indexOf(code) > -1 ? 0 : DEC3.indexOf(code) > -1 ? 3 : 2);
const money = (value, code) => {
  const d = decimalsFor(code);
  return value.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
};
const rateText = (v) => {
  const d = v >= 1000 ? 2 : v >= 100 ? 3 : v >= 1 ? 4 : 6;
  return v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
};
const PER_PAGE = 12;

export default function Screen() {
  const [from, setFrom] = React.useState("USD");
  const [to, setTo] = React.useState("EUR");
  const [amount, setAmount] = React.useState("1000");
  const [rejected, setRejected] = React.useState(false);
  const [view, setView] = React.useState("All");
  const [query, setQuery] = React.useState("");
  const [picked, setPicked] = React.useState([]);
  const [onlyPicked, setOnlyPicked] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const rule = `2px solid ${brand.primaryColor}`;
  const hair = `1px solid ${mix(brand.primaryColor, 16)}`;

  const parsed = amount.trim() === "" ? null : Number(amount);
  const numeric = parsed === null || Number.isNaN(parsed) ? null : parsed;
  const pairRate = RATE[to] / RATE[from];
  const converted = numeric === null ? null : numeric * pairRate;
  const stale = SNAPSHOT.age_minutes > 60;

  const onAmount = (e) => {
    const raw = e.target.value.replace(/[\s,]/g, "");
    if (raw === "" || /^\d{0,12}(\.\d{0,6})?$/.test(raw)) {
      setAmount(raw);
      setRejected(false);
    } else {
      setRejected(true); // invalid keystroke ignored, previous amount kept
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const rows = CURRENCIES.filter(
    (c) =>
      (view === "All" || c[3] === view) &&
      (!onlyPicked || picked.indexOf(c[0]) > -1) &&
      `${c[0]} ${c[1]}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(rows.length / PER_PAGE));
  const current = Math.min(page, totalPages);
  const pageRows = rows.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const toggle = (code) => {
    const next = picked.indexOf(code) > -1 ? picked.filter((p) => p !== code) : [...picked, code];
    setPicked(next);
    if (!next.length) setOnlyPicked(false);
  };
  const retarget = (code) => {
    if (code === from) swap();
    else setTo(code);
  };

  return (
    <div className="bg-white" style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}>
      <style>{`
        @keyframes fxFade { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }
        .fx-fade { animation: fxFade 180ms ease-out; }
        @media (prefers-reduced-motion: reduce) { .fx-fade { animation: none; } }
      `}</style>

      <div className="flex flex-wrap items-end justify-between gap-4 pb-4" style={{ borderBottom: rule }}>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.neutralColor }}>{PRODUCT}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight" style={{ fontFamily: brand.fontHeading }}>{SCREEN}</h1>
        </div>
        <button type="button" onClick={swap} aria-label={`Swap currencies — convert ${to} into ${from}`} className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ backgroundColor: brand.primaryColor, borderRadius: brand.radius, outlineColor: brand.accentColor }}>⇄ Swap {from} / {to}</button>
      </div>

      <section aria-labelledby="convert-heading" className="my-4 grid md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]" style={{ border: rule, borderRadius: brand.radius }}>
        <div className="p-4">
          <h2 id="convert-heading" className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.neutralColor }}>Conversion</h2>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <div className="min-w-[9rem] flex-1">
              <label htmlFor="fx-amount" className="block text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: brand.neutralColor }}>Amount in {from}</label>
              <input id="fx-amount" value={amount} onChange={onAmount} inputMode="decimal" autoComplete="off" aria-describedby="fx-amount-hint" placeholder="0" className="mt-1 h-10 w-full bg-white px-3 text-lg font-bold tabular-nums outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }} />
            </div>
            <div className="min-w-[11rem] flex-1">
              <label htmlFor="fx-from" className="block text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: brand.neutralColor }}>From</label>
              <select id="fx-from" value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 h-10 w-full bg-white px-2 text-sm font-semibold outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }}>
                {CURRENCIES.map((c) => <option key={c[0]} value={c[0]}>{c[0]} — {c[1]}</option>)}
              </select>
            </div>
            <div className="min-w-[11rem] flex-1">
              <label htmlFor="fx-to" className="block text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: brand.neutralColor }}>To</label>
              <select id="fx-to" value={to} onChange={(e) => setTo(e.target.value)} className="mt-1 h-10 w-full bg-white px-2 text-sm font-semibold outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }}>
                {CURRENCIES.map((c) => <option key={c[0]} value={c[0]}>{c[0]} — {c[1]}</option>)}
              </select>
            </div>
          </div>
          <p id="fx-amount-hint" className="mt-3 text-xs" style={{ color: rejected ? brand.accentColor : brand.neutralColor }}>
            {rejected
              ? "Digits and one decimal point only — that keystroke was ignored and your amount is unchanged."
              : numeric === null
              ? "Type an amount to convert. No submit button: the result updates as you type."
              : `${CURRENCIES.length} ISO 4217 fiat currencies available. Result updates as you type.`}
          </p>
          <div className="mt-4 pt-3" style={{ borderTop: hair }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] tabular-nums" style={{ color: brand.neutralColor }}>
              Rates last updated {SNAPSHOT.fetched_at} · {SNAPSHOT.age_minutes} min ago
            </p>
            <p className="mt-1 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
              {SNAPSHOT.source} · base {SNAPSHOT.base_currency} · served from {SNAPSHOT.cache} cache · snapshot {SNAPSHOT.id}
            </p>
            {stale ? (
              <p className="mt-2 flex items-start gap-2 pl-2 text-xs font-semibold" style={{ borderLeft: `2px solid ${brand.accentColor}` }}>
                <Clock className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color: brand.accentColor }} />
                <span>Stale — the hourly refresh is late. Showing the last rates cached at {SNAPSHOT.fetched_at}.</span>
              </p>
            ) : (
              <p className="mt-2 flex items-start gap-2 text-xs tabular-nums" style={{ color: brand.neutralColor }}>
                <Clock className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span>Current — next hourly refresh at {SNAPSHOT.next_refresh}.</span>
              </p>
            )}
          </div>
        </div>

        <div className="border-t-2 p-4 md:border-l-2 md:border-t-0" style={{ borderColor: brand.primaryColor }}>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.neutralColor }}>Converted amount</p>
          <div aria-live="polite" key={`${from}-${to}-${amount}`} className="fx-fade">
            {converted === null ? (
              <React.Fragment>
                <p className="mt-2 text-4xl font-bold tracking-tight tabular-nums" style={{ color: brand.neutralColor }}>—</p>
                <p className="mt-2 text-sm font-semibold">Enter an amount in {from} to see it in {NAME[to]}.</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p className="mt-2 text-4xl font-bold leading-none tracking-tight tabular-nums">
                  {money(converted, to)} <span className="text-xl font-bold">{to}</span>
                </p>
                <p className="mt-2 text-sm font-semibold tabular-nums">
                  {money(numeric, from)} {from} → {NAME[to]}
                </p>
              </React.Fragment>
            )}
            <div className="mt-3 pt-3" style={{ borderTop: hair }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: brand.neutralColor }}>Effective rate</p>
              <p className="mt-1 text-base font-bold tabular-nums">1 {from} = {rateText(pairRate)} {to}</p>
              <p className="text-xs tabular-nums" style={{ color: brand.neutralColor }}>1 {to} = {rateText(1 / pairRate)} {from}</p>
            </div>
          </div>
          <p className="mt-4 flex items-start gap-2 pl-2 text-xs font-semibold" style={{ borderLeft: `2px solid ${brand.accentColor}` }}>
            <AlertCircle className="mt-[1px] h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color: brand.accentColor }} />
            <span>Indicative rates only. Informational use — not for executing transactions or settlement.</span>
          </p>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-4 py-4">
        <div role="group" aria-label="Filter rate book by region" className="flex flex-wrap" style={{ border: rule, borderRadius: brand.radius }}>
          {VIEWS.map((v, i) => (
            <button key={v[0]} type="button" aria-pressed={view === v[0]} onClick={() => { setView(v[0]); setPage(1); }} className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2" style={{ borderLeft: i ? rule : "none", backgroundColor: view === v[0] ? brand.primaryColor : "#fff", color: view === v[0] ? "#fff" : brand.primaryColor, outlineColor: brand.accentColor }}>
              {v[1]}
            </button>
          ))}
        </div>
        <label htmlFor="corp-search" className="sr-only">Search currencies</label>
        <input id="corp-search" value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} placeholder="Search ISO code or currency name" className="h-9 w-72 max-w-full bg-white px-3 text-sm outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }} />
        <p className="ml-auto text-xs font-semibold tabular-nums">{picked.length ? `${picked.length} compared` : `${rows.length} currencies`}</p>
        <button type="button" disabled={!picked.length} aria-pressed={onlyPicked} onClick={() => { setOnlyPicked(!onlyPicked); setPage(1); }} className="h-9 px-4 text-xs font-bold uppercase tracking-[0.14em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-30" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor, backgroundColor: onlyPicked ? brand.primaryColor : "#fff", color: onlyPicked ? "#fff" : brand.primaryColor }}>{onlyPicked ? "Show all" : "Compare only"}</button>
      </div>

      <table className="w-full text-[13px]" style={{ borderTop: rule }}>
        <caption className="sr-only">Rate book: every ISO 4217 fiat currency against 1 {from}, with {amount === "" ? "no" : amount} {from} converted.</caption>
        <thead>
          <tr className="text-left text-[11px] uppercase tracking-[0.14em]" style={{ borderBottom: rule, color: brand.neutralColor }}>
            <th scope="col" className="w-8 py-2"><span className="sr-only">Compare</span></th>
            <th scope="col" className="py-2 font-bold">Code</th>
            <th scope="col" className="py-2 font-bold">Currency</th>
            <th scope="col" className="hidden py-2 font-bold md:table-cell">Region</th>
            <th scope="col" className="py-2 font-bold">Pair</th>
            <th scope="col" className="hidden py-2 font-bold md:table-cell">Minor units</th>
            <th scope="col" className="py-2 font-bold">Per 1 {from}</th>
            <th scope="col" className="py-2 text-right font-bold">{amount === "" ? "Converted" : `${amount} ${from} =`}</th>
          </tr>
        </thead>
        <tbody key={`${view}-${query}-${current}-${onlyPicked}`} className="fx-fade">
          {pageRows.map((c) => {
            const code = c[0];
            const pair = code === from ? "From" : code === to ? "To" : "—";
            const line = RATE[code] / RATE[from];
            return (
              <tr key={code} className="hover:bg-black/[0.03]" style={{ borderBottom: hair, backgroundColor: picked.indexOf(code) > -1 ? mix(brand.primaryColor, 6) : undefined }}>
                <td className="py-2"><input type="checkbox" aria-label={`Compare ${c[1]} (${code})`} checked={picked.indexOf(code) > -1} onChange={() => toggle(code)} style={{ accentColor: brand.primaryColor }} /></td>
                <td className="py-2 tabular-nums" style={{ color: brand.neutralColor }}>
                  <button type="button" onClick={() => retarget(code)} aria-label={`Convert into ${c[1]} (${code})`} className="font-semibold underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" style={{ color: brand.primaryColor, outlineColor: brand.accentColor }}>{code}</button>
                </td>
                <td className="py-2 font-semibold">{c[1]}</td>
                <td className="hidden py-2 md:table-cell">{REGION_LABEL[c[3]]}</td>
                <td className="py-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: pair === "—" ? brand.neutralColor : brand.accentColor }}>{pair}</td>
                <td className="hidden py-2 tabular-nums md:table-cell">{decimalsFor(code)}</td>
                <td className="py-2 tabular-nums">{rateText(line)}</td>
                <td className="py-2 text-right font-semibold tabular-nums">{numeric === null ? "—" : money(numeric * line, code)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 ? (
        <p className="py-10 text-center text-sm font-semibold" style={{ borderBottom: hair }}>
          {onlyPicked ? "Nothing ticked for comparison yet." : `No currency matches “${query.trim()}”. Try an ISO code such as SEK, or a name such as Krona.`}
        </p>
      ) : null}
      <div className="flex items-center justify-between pt-3 text-xs font-semibold tabular-nums">
        <span>Page {current} of {totalPages} · {rows.length} of {CURRENCIES.length} currencies</span>
        <span className="flex gap-2">
          <button type="button" disabled={current <= 1} onClick={() => setPage(current - 1)} className="h-8 px-3 font-bold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-30" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }} aria-label="Previous page of currencies">Prev</button>
          <button type="button" disabled={current >= totalPages} onClick={() => setPage(current + 1)} className="h-8 px-3 font-bold uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-30" style={{ border: rule, borderRadius: brand.radius, outlineColor: brand.accentColor }} aria-label="Next page of currencies">Next</button>
        </span>
      </div>
    </div>
  );
}
