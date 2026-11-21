"use client";

import React, { useState } from "react";
import { MenuItem } from "@/types";
import ItemCustomizerModal from "@/components/menu/ItemCustomizerModal";
import { Plus } from "lucide-react";

interface BestsellerOrderButtonProps {
  item: MenuItem;
}

export default function BestsellerOrderButton({ item }: BestsellerOrderButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-primary text-text-main hover:text-[#08090B] border border-border hover:border-primary text-xs font-semibold active:scale-95 transition-all flex items-center gap-1.5 focus-ring min-h-[44px]"
        aria-label={`Customize and add ${item.name} to bag`}
      >
        <Plus className="w-4 h-4" aria-hidden="true" />
        <span>Customize & Add</span>
      </button>

      {isOpen && (
        <ItemCustomizerModal item={item} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
