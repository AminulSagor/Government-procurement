"use client";

import { useMemo, useState } from "react";
import NegLeftPanel from "./_components/neg-left-panel";
import NegRightPanel from "./_components/neg-right-panel";
import { negotiationDemo } from "./_data/negotiation-step.demo";
import { NegotiationMiniStep } from "./_types/negotiation-step.types";

export default function NegotiationStep() {
  const data = useMemo(() => negotiationDemo, []);
  const [miniStep, setMiniStep] = useState<NegotiationMiniStep>(data.miniStep);
  const [cards, setCards] = useState(data.leftCards);

  const onSelectCard = (id: string) => {
    setCards((prev) => prev.map((c) => ({ ...c, isActive: c.id === id })));
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <NegLeftPanel
          titleBn="রিকুইজিশন সারাংশ"
          miniStep={miniStep}
          onMiniStepChange={setMiniStep}
          cards={cards}
          onSelectCard={onSelectCard}
        />
      </div>

      <div className="lg:col-span-8">
        <NegRightPanel data={data} />
      </div>
    </div>
  );
}
