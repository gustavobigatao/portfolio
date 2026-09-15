// Ícones locais para tecnologias que não existem no Simple Icons.
export function CSharpIcon() {
  return (
    <svg viewBox="0 0 32 32" width="20" height="20" aria-hidden="true">
      <text x="16" y="23" textAnchor="middle" fontSize="17" fontWeight="700" fill="#9b4f96">
        C#
      </text>
    </svg>
  );
}

export function PowerBIIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="#f2c811">
      <rect x="3" y="12" width="4" height="9" rx="0.5" />
      <rect x="10" y="7" width="4" height="14" rx="0.5" />
      <rect x="17" y="2" width="4" height="19" rx="0.5" />
    </svg>
  );
}

export const LOCAL_ICONS = {
  csharp: CSharpIcon,
  powerbi: PowerBIIcon,
};
