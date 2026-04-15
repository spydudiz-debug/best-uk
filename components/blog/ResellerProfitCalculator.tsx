"use client";

import { useMemo, useState } from "react";
import { CREDIT_BY_MONTHS, RESELLER_PACKS } from "@/data/blog-reseller-uk-2026";

export default function ResellerProfitCalculator() {
  const [packId, setPackId] = useState<string>("gold");
  const [monthsKey, setMonthsKey] = useState<string>("1");
  const [retailGbp, setRetailGbp] = useState<string>("14.99");
  const [units, setUnits] = useState<string>("10");

  const pack = RESELLER_PACKS.find((p) => p.id === packId) ?? RESELLER_PACKS[2];
  const duration = CREDIT_BY_MONTHS.find((c) => String(c.months) === monthsKey) ?? CREDIT_BY_MONTHS[0];

  const result = useMemo(() => {
    const price = Number.parseFloat(retailGbp.replace(/[^0-9.]/g, "")) || 0;
    const n = Math.max(0, Number.parseInt(units, 10) || 0);
    const costPerCredit = pack.priceGbp / pack.credits;
    const creditsPerSale = duration.credits;
    const costPerSale = creditsPerSale * costPerCredit;
    const profitPerSale = price - costPerSale;
    const totalRevenue = price * n;
    const totalCost = costPerSale * n;
    const totalProfit = totalRevenue - totalCost;
    return {
      costPerCredit,
      creditsPerSale,
      costPerSale,
      profitPerSale,
      totalRevenue,
      totalCost,
      totalProfit,
      price,
      n,
    };
  }, [pack, duration, retailGbp, units]);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-white">Estimate your margin</h3>
      <p className="mt-2 text-sm text-body">
        Pick the reseller package you buy credits from, the subscription length you sell, your retail
        price, and volume — we estimate cost per sale from credit math (illustrative only).
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-body-muted">Reseller package you purchase</span>
          <select
            value={packId}
            onChange={(e) => setPackId(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617] px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
          >
            {RESELLER_PACKS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — £{p.priceGbp} ({p.credits} credits)
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="text-body-muted">Subscription you sell to customers</span>
          <select
            value={monthsKey}
            onChange={(e) => setMonthsKey(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617] px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
          >
            {CREDIT_BY_MONTHS.map((c) => (
              <option key={c.months} value={String(c.months)}>
                {c.label} ({c.credits} credit{c.credits > 1 ? "s" : ""})
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm">
          <span className="text-body-muted">Retail price per subscription (£)</span>
          <input
            type="text"
            inputMode="decimal"
            value={retailGbp}
            onChange={(e) => setRetailGbp(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617] px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
          />
        </label>

        <label className="block text-sm">
          <span className="text-body-muted">How many subscriptions sold</span>
          <input
            type="number"
            min={0}
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617] px-4 py-3 text-sm text-white outline-none focus:border-accent-cyan/50"
          />
        </label>
      </div>

      <dl className="mt-8 grid gap-3 rounded-xl border border-accent-cyan/20 bg-accent-cyan/[0.06] p-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-body-muted">Cost per credit</dt>
          <dd className="mt-1 font-semibold text-white">£{result.costPerCredit.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-body-muted">Credits per sale</dt>
          <dd className="mt-1 font-semibold text-white">{result.creditsPerSale}</dd>
        </div>
        <div>
          <dt className="text-body-muted">Your cost per sale</dt>
          <dd className="mt-1 font-semibold text-white">£{result.costPerSale.toFixed(2)}</dd>
        </div>
        <div>
          <dt className="text-body-muted">Profit per sale</dt>
          <dd className="mt-1 font-semibold text-emerald-400">£{result.profitPerSale.toFixed(2)}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-body-muted">Total revenue / cost / profit ({result.n} sales)</dt>
          <dd className="mt-2 flex flex-wrap gap-4 text-white">
            <span>Revenue: £{result.totalRevenue.toFixed(2)}</span>
            <span className="text-body">Cost: £{result.totalCost.toFixed(2)}</span>
            <span className="font-semibold text-emerald-400">Profit: £{result.totalProfit.toFixed(2)}</span>
          </dd>
        </div>
      </dl>
    </div>
  );
}
