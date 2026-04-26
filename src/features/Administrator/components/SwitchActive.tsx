import { Check, X } from "lucide-react";

interface SwitchActiveProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}
export const SwitchActive = ({checked, onChange, label} : SwitchActiveProps) => {
  const bgClass = checked ? "bg-green-500" : "bg-gray-300";
  const circleClass = checked ? "translate-x-7" : "translate-x-1";
  return (
    <div className="flex gap-5 items-center">
      {label && <label className="text-2xl w-fit">{label}</label>}
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex items-center h-7 w-14 rounded-full cursor-pointer transition-colors ${bgClass}`}>
        <span className={`inline-flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-md transition-transform ${circleClass}`}>
          {checked ? <Check className="w-3 h-3 text-green-500" /> : <X className="w-3 h-3 text-gray-400" />}
        </span>
      </div>
    </div>
  )
}
