"use client";

import { useState } from "react";
import CreateAgentTopbar from "./_components/create-agent-topbar";
import CreateAgentSection from "./_components/create-agent-section";
import CreateAgentPersonalForm from "./_components/create-agent-personal-form";
import CreateAgentAreaForm from "./_components/create-agent-area-form";
import CreateAgentDocsUpload from "./_components/create-agent-docs-upload";
import CreateAgentActions from "./_components/create-agent-actions";

import { demoCreateAgent, demoSelectOptions } from "./_data/create-agent.demo";
import type { CreateAgentFormState } from "./_types/create-agent.types";

export default function CreateAgentPage() {
  const [form, setForm] = useState<CreateAgentFormState>(demoCreateAgent);

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* top area (white like screenshot) */}
      <div className="border-b border-[rgba(100,116,139,0.10)] bg-white">
        <div className="mx-auto max-w-[1120px] px-6 py-6">
          <CreateAgentTopbar />
        </div>
      </div>

      {/* content centered */}
      <div className="mx-auto max-w-[1120px] px-6 py-6">
        <div className="space-y-5">
          <CreateAgentSection titleBn="ব্যক্তিগত তথ্য">
            <CreateAgentPersonalForm value={form} onChange={setForm} />
          </CreateAgentSection>

          <CreateAgentSection titleBn="এলাকা ও নিয়োগ">
            <CreateAgentAreaForm
              value={form}
              onChange={setForm}
              options={demoSelectOptions}
            />
          </CreateAgentSection>

          <CreateAgentSection titleBn="নথিপত্র আপলোড">
            <CreateAgentDocsUpload value={form} onChange={setForm} />
          </CreateAgentSection>
        </div>

        {/* bottom actions (same row, right aligned like screenshot) */}
        <div className="mt-6 flex justify-end">
          <CreateAgentActions
            onCancel={() => console.log("cancel")}
            onSubmit={() => console.log("submit", form)}
          />
        </div>
      </div>
    </div>
  );
}
