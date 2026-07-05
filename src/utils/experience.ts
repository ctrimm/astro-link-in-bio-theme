export interface ExperienceEntry {
  role: string;
  organization: string;
  url?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
  description?: string;
  icon?: string;
}

/**
 * Formats an experience entry's date range for display. `current` takes
 * precedence over `endDate` so a still-ongoing role always reads "Present"
 * without requiring the config to be updated over time.
 */
export function formatDateRange(entry: Pick<ExperienceEntry, 'startDate' | 'endDate' | 'current'>): string {
  const end = entry.current ? 'Present' : entry.endDate;
  if (entry.startDate && end) return `${entry.startDate} – ${end}`;
  if (entry.startDate) return entry.startDate;
  if (end) return end;
  return '';
}
