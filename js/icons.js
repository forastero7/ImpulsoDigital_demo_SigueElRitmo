/* Ilustraciones SVG simples (silueta negra sobre círculo dorado, motivo del brief).
   Reemplazar por fotos propias de la tienda cuando estén disponibles. */
window.ICONS = {
  guitar: '<path d="M62 14l6 6-16 16" stroke-width="4" fill="none"/><path d="M50 34c-4-2-9-1-12 2-2 2-2 5-4 7-3 2-8 1-12 5-6 6-4 16 3 22s16 9 22 3c4-4 3-9 5-12 2-2 5-2 7-4 3-3 4-8 2-12z"/><circle cx="38" cy="50" r="4" fill="var(--dorado)"/><path d="M30 56l8-8" stroke="var(--dorado)" stroke-width="2"/>',
  electric: '<path d="M64 12l6 6-18 18" stroke-width="4" fill="none"/><path d="M48 34l-6-2-4 6-8-2-8 8c-6 6-3 15 3 21s15 9 21 3l8-8-2-8 6-4-2-6z"/><rect x="31" y="47" width="10" height="3" transform="rotate(-45 36 48)" fill="var(--dorado)"/>',
  cajon: '<path d="M26 20h28l4 42H22z"/><circle cx="40" cy="36" r="6" fill="var(--dorado)"/><path d="M22 62h36v4H22z"/>',
  charango: '<path d="M60 10l8 8-18 18" stroke-width="4" fill="none"/><ellipse cx="34" cy="52" rx="14" ry="18" transform="rotate(45 34 52)"/><circle cx="36" cy="50" r="3.5" fill="var(--dorado)"/>',
  flute: '<rect x="37" y="10" width="7" height="60" rx="3"/><circle cx="40.5" cy="24" r="1.8" fill="var(--dorado)"/><circle cx="40.5" cy="32" r="1.8" fill="var(--dorado)"/><circle cx="40.5" cy="40" r="1.8" fill="var(--dorado)"/><circle cx="40.5" cy="48" r="1.8" fill="var(--dorado)"/><circle cx="40.5" cy="56" r="1.8" fill="var(--dorado)"/>',
  panpipe: '<path d="M18 22h6v44h-6zM26 22h6v38h-6zM34 22h6v32h-6zM42 22h6v27h-6zM50 22h6v22h-6zM58 22h6v18h-6z"/><rect x="16" y="30" width="50" height="4" fill="var(--dorado)"/>',
  drum: '<ellipse cx="40" cy="28" rx="22" ry="7"/><path d="M18 28v24c0 4 10 8 22 8s22-4 22-8V28c0 4-10 8-22 8s-22-4-22-8z"/><path d="M22 36l8 20M34 38l4 20M46 38l-4 20M58 36l-8 20" stroke="var(--dorado)" stroke-width="2"/>',
  snare: '<ellipse cx="40" cy="36" rx="22" ry="7"/><path d="M18 36v12c0 4 10 8 22 8s22-4 22-8V36c0 4-10 8-22 8s-22-4-22-8z"/><path d="M24 14l14 18M56 14L42 32" stroke-width="3"/>',
  keyboard: '<rect x="10" y="28" width="60" height="26" rx="3"/><path d="M16 40h48v10H16z" fill="var(--crema)"/><path d="M22 40v10M28 40v10M34 40v10M40 40v10M46 40v10M52 40v10M58 40v10" stroke="var(--negro)" stroke-width="1.2"/><circle cx="20" cy="33" r="2" fill="var(--dorado)"/><circle cx="27" cy="33" r="2" fill="var(--dorado)"/>',
  piano: '<rect x="10" y="22" width="60" height="22" rx="3"/><path d="M15 32h50v9H15z" fill="var(--crema)"/><path d="M14 44h4v20h-4zM62 44h4v20h-4z"/><path d="M21 32v9M27 32v9M33 32v9M39 32v9M45 32v9M51 32v9M57 32v9" stroke="var(--negro)" stroke-width="1.2"/>',
  stand: '<path d="M18 26h44v6H18z"/><path d="M22 66L58 32M58 66L22 32" stroke-width="4"/>',
  drumkit: '<ellipse cx="40" cy="54" rx="14" ry="14"/><circle cx="40" cy="54" r="5" fill="var(--dorado)"/><ellipse cx="22" cy="42" rx="9" ry="4"/><ellipse cx="58" cy="42" rx="9" ry="4"/><path d="M8 22h22M50 18h22" stroke-width="3"/><path d="M19 22v44M61 18v48" stroke-width="2"/>',
  conga: '<path d="M22 20h16l-2 44h-12zM44 24h16l-2 40h-12z"/><ellipse cx="30" cy="20" rx="8" ry="3" fill="var(--dorado)"/><ellipse cx="52" cy="24" rx="8" ry="3" fill="var(--dorado)"/>',
  marching: '<ellipse cx="40" cy="40" rx="20" ry="20"/><circle cx="40" cy="40" r="13" fill="var(--dorado)"/><circle cx="40" cy="40" r="4"/><path d="M14 14l12 12M66 14L54 26" stroke-width="3"/>',
  lyre: '<path d="M26 14c-10 20-6 36 4 44h20c10-8 14-24 4-44" stroke-width="4" fill="none"/><path d="M31 26h18M30 32h20M30 38h20M31 44h18M33 50h14" stroke="var(--dorado)" stroke-width="3"/><path d="M40 58v12" stroke-width="4"/>',
  bugle: '<path d="M10 40h36" stroke-width="4"/><path d="M46 32l22-12v40L46 48z"/><path d="M18 40c0-10 20-10 20 0" stroke-width="3" fill="none"/>',
  speaker: '<path d="M24 12h32l4 56H20z"/><circle cx="40" cy="48" r="11" fill="var(--dorado)"/><circle cx="40" cy="48" r="4"/><circle cx="40" cy="24" r="5" fill="var(--dorado)"/>',
  amp: '<rect x="14" y="20" width="52" height="44" rx="4"/><rect x="20" y="32" width="40" height="26" rx="2" fill="var(--dorado)"/><circle cx="24" cy="26" r="2" fill="var(--crema)"/><circle cx="32" cy="26" r="2" fill="var(--crema)"/><circle cx="40" cy="26" r="2" fill="var(--crema)"/>',
  mixer: '<rect x="12" y="20" width="56" height="40" rx="3"/><path d="M22 28v26M32 28v26M42 28v26M52 28v26M62 28v26" stroke="var(--dorado)" stroke-width="2"/><rect x="19" y="44" width="6" height="4" fill="var(--crema)"/><rect x="29" y="36" width="6" height="4" fill="var(--crema)"/><rect x="39" y="48" width="6" height="4" fill="var(--crema)"/><rect x="49" y="32" width="6" height="4" fill="var(--crema)"/>',
  mic: '<rect x="32" y="10" width="16" height="30" rx="8"/><path d="M36 18h8M36 24h8M36 30h8" stroke="var(--dorado)" stroke-width="2"/><path d="M26 34c0 10 6 16 14 16s14-6 14-16" stroke-width="3" fill="none"/><path d="M40 50v14M30 66h20" stroke-width="4"/>',
  dj: '<rect x="8" y="28" width="64" height="30" rx="4"/><circle cx="24" cy="43" r="10" fill="var(--dorado)"/><circle cx="56" cy="43" r="10" fill="var(--dorado)"/><circle cx="24" cy="43" r="2"/><circle cx="56" cy="43" r="2"/><path d="M40 34v18" stroke="var(--crema)" stroke-width="2"/>',
  interface: '<rect x="10" y="30" width="60" height="24" rx="4"/><circle cx="22" cy="42" r="6" fill="var(--dorado)"/><circle cx="38" cy="42" r="6" fill="var(--dorado)"/><circle cx="56" cy="42" r="4" fill="var(--crema)"/>',
  headphones: '<path d="M18 46c0-18 10-28 22-28s22 10 22 28" stroke-width="5" fill="none"/><rect x="12" y="42" width="12" height="20" rx="5"/><rect x="56" y="42" width="12" height="20" rx="5"/>',
  monitor: '<rect x="12" y="16" width="24" height="48" rx="3"/><rect x="44" y="16" width="24" height="48" rx="3"/><circle cx="24" cy="48" r="7" fill="var(--dorado)"/><circle cx="56" cy="48" r="7" fill="var(--dorado)"/><circle cx="24" cy="28" r="3" fill="var(--dorado)"/><circle cx="56" cy="28" r="3" fill="var(--dorado)"/>',
  pick: '<path d="M40 66C28 54 18 38 20 26c2-10 38-10 40 0 2 12-8 28-20 40z"/><circle cx="40" cy="32" r="5" fill="var(--dorado)"/>',
  strings: '<circle cx="40" cy="40" r="22" stroke-width="3" fill="none"/><circle cx="40" cy="40" r="16" stroke-width="2" fill="none"/><circle cx="40" cy="40" r="10" stroke-width="2" fill="none"/><circle cx="40" cy="40" r="4"/>',
  tuner: '<rect x="22" y="24" width="30" height="22" rx="4"/><path d="M28 40l9-10" stroke="var(--dorado)" stroke-width="3"/><path d="M48 46l6 20" stroke-width="5"/>',
  cable: '<path d="M14 20c20 0 10 20 26 20s6 20 26 20" stroke-width="4" fill="none"/><rect x="8" y="16" width="10" height="8" rx="2"/><rect x="62" y="56" width="10" height="8" rx="2"/>',
  sticks: '<path d="M20 64L52 14M30 66L60 18" stroke-width="5"/><circle cx="52" cy="14" r="3"/><circle cx="60" cy="18" r="3"/>',
  case: '<path d="M44 10c8 0 14 8 14 16 0 6-4 8-4 12s6 8 6 16c0 8-8 16-20 16S20 62 20 54s6-12 6-16-4-6-4-12c0-8 6-16 14-16z"/><path d="M40 16v50" stroke="var(--dorado)" stroke-width="2"/>'
};

window.iconSVG = function (name, cls) {
  var body = window.ICONS[name] || window.ICONS.pick;
  return '<svg class="' + (cls || "art") + '" viewBox="0 0 80 80" aria-hidden="true" focusable="false">' +
    '<circle cx="40" cy="40" r="38" fill="var(--dorado)"/>' +
    '<g fill="var(--negro)" stroke="var(--negro)" stroke-linecap="round" stroke-linejoin="round">' + body + '</g></svg>';
};
