import { Trophy, Award} from "lucide-react";
import { AwardType } from "@/data/works";

interface FormatAuthorsProps {
  authors: string;
  textSize?: string; // e.g., 'xs', 'sm', 'base', 'lg'
}

export const FormatAuthors = ({ authors, textSize = "sm" }: FormatAuthorsProps) => {
  const parts = authors.split(/(?<!-)(\bYu\sChen\b)/).filter(p => p && p.trim() !== "");

  return (
    <p className={`text-${textSize} leading-relaxed`}>
      {parts.map((part, i) =>
        part === "Yu Chen" ? (
          <strong key={i} className="font-bold text-foreground tracking-tight">
            Yu Chen
          </strong>
        ) : (
          <span key={i} className="opacity-50">
            {part}
          </span>
        )
      )}
    </p>
  );
};

export const AwardBadge = ({ type }: { type: AwardType }) => {
  if (!type || type === 'NONE') return null;
  const config = {
    BEST_PAPER: { icon: Trophy, text: "Best Paper Award", color: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20" },
    HONORABLE_MENTION: { icon: Award, text: "Honorable Mention", color: "text-slate-500 dark:text-slate-400 bg-slate-500/10 border-slate-500/20" }
  };
  const { icon: Icon, text, color } = config[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight border ${color}`}>
      <Icon size={16} strokeWidth={2.5} /> {text}
    </span>
  );
};

export const formatDate = (dateStr: string) => {
  if (!dateStr || dateStr === "Present") return "Present";
  
  const [year, month] = dateStr.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const monthIndex = parseInt(month, 10) - 1;
  return `${monthNames[monthIndex]} ${year}`;
};