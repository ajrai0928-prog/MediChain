import React from "react";
import { User, BriefcaseMedical, Hospital } from "lucide-react";

export default function RoleSelector({ role, setRole }) {
  const items = [
    { key: "patient", label: "Patient", icon: <User size={26} /> },
    { key: "doctor", label: "Doctor", icon: <BriefcaseMedical size={26} /> },
    { key: "hospital", label: "Hospital", icon: <Hospital size={26} /> },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {items.map((r) => (
        <div
          key={r.key}
          onClick={() => setRole(r.key)}
          className={`cursor-pointer px-4 py-5 rounded-xl flex flex-col items-center gap-2
            backdrop-blur-lg border transition-all
            ${
              role === r.key
                ? "bg-white/10 border-white/30 text-white shadow-lg scale-[1.02]"
                : "bg-black/40 border-white/10 text-neutral-300 hover:bg-black/50"
            }
          `}
        >
          <div className="text-blue-400">{r.icon}</div>
          <div className="text-sm font-medium">{r.label}</div>
        </div>
      ))}
    </div>
  );
}
