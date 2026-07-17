import type { Motif } from "@/lib/content";

/**
 * Placeholder "plates" drawn as architectural studies — elevations, plans and
 * sections in the brand palette. Each renders crisply at any size and is
 * replaced by a real photograph when a `src` is supplied to <Plate />.
 */

const C = {
  bone: "#faf6f0",
  plaster: "#f4eae0",
  sand: "#f4dfc8",
  ink: "#000000",
  night: "#14110c",
};

function range(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i);
}

function GroundHatch({
  y,
  from = 40,
  to = 760,
  color = C.ink,
}: {
  y: number;
  from?: number;
  to?: number;
  color?: string;
}) {
  const count = Math.floor((to - from) / 30);
  return (
    <g>
      <line x1={from} y1={y} x2={to} y2={y} stroke={color} strokeWidth={2} />
      {range(count).map((i) => (
        <line
          key={i}
          x1={from + i * 30 + 18}
          y1={y}
          x2={from + i * 30}
          y2={y + 26}
          stroke={color}
          strokeOpacity={0.35}
          strokeWidth={1}
        />
      ))}
    </g>
  );
}

function Facade() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.plaster} />
      <circle cx={646} cy={148} r={44} fill="none" stroke={C.ink} strokeOpacity={0.5} strokeWidth={1.5} />
      <rect x={118} y={222} width={430} height={628} fill={C.bone} stroke={C.ink} strokeOpacity={0.7} strokeWidth={1.5} />
      <rect x={548} y={368} width={134} height={482} fill={C.sand} stroke={C.ink} strokeOpacity={0.7} strokeWidth={1.5} />
      {range(6).map((i) => (
        <line
          key={`m${i}`}
          x1={247 + i * 43}
          y1={252}
          x2={247 + i * 43}
          y2={850}
          stroke={C.ink}
          strokeOpacity={0.2}
          strokeWidth={1}
        />
      ))}
      {range(8).map((i) => (
        <line
          key={`f${i}`}
          x1={247}
          y1={296 + i * 70}
          x2={548}
          y2={296 + i * 70}
          stroke={C.ink}
          strokeOpacity={0.1}
          strokeWidth={1}
        />
      ))}
      <rect x={160} y={768} width={46} height={82} fill={C.ink} fillOpacity={0.8} />
      <line x1={582} y1={368} x2={582} y2={850} stroke={C.ink} strokeOpacity={0.3} strokeWidth={1} />
      <line x1={648} y1={368} x2={648} y2={850} stroke={C.ink} strokeOpacity={0.3} strokeWidth={1} />
      <GroundHatch y={850} />
    </g>
  );
}

function Arches() {
  const bays = [114, 314, 514];
  return (
    <g>
      <rect width={800} height={1000} fill={C.bone} />
      <line x1={80} y1={284} x2={720} y2={284} stroke={C.ink} strokeOpacity={0.6} strokeWidth={1.5} />
      <line x1={80} y1={302} x2={720} y2={302} stroke={C.ink} strokeOpacity={0.25} strokeWidth={1} />
      {bays.map((x0, i) => (
        <path
          key={i}
          d={`M ${x0} 850 L ${x0} 640 A 86 86 0 0 1 ${x0 + 172} 640 L ${x0 + 172} 850`}
          fill={i === 1 ? C.sand : "none"}
          stroke={C.ink}
          strokeOpacity={0.75}
          strokeWidth={2}
        />
      ))}
      {range(7).map((i) => (
        <line
          key={`h${i}`}
          x1={128 + i * 10}
          y1={850 - i * 24}
          x2={128}
          y2={850 - i * 24}
          stroke={C.ink}
          strokeOpacity={0.3}
          strokeWidth={1}
        />
      ))}
      {bays.map((x0, i) => (
        <line
          key={`k${i}`}
          x1={x0 + 86}
          y1={554}
          x2={x0 + 86}
          y2={528}
          stroke={C.ink}
          strokeOpacity={0.45}
          strokeWidth={1.5}
        />
      ))}
      <GroundHatch y={850} />
    </g>
  );
}

function Stair() {
  const steps = 8;
  const x0 = 128;
  const y0 = 850;
  const dx = 68;
  const dy = 70;
  let d = `M ${x0} ${y0}`;
  for (let i = 0; i < steps; i++) {
    d += ` H ${x0 + dx * (i + 1)} V ${y0 - dy * (i + 1)}`;
  }
  return (
    <g>
      <rect width={800} height={1000} fill={C.sand} />
      <circle cx={182} cy={188} r={40} fill="none" stroke={C.ink} strokeOpacity={0.5} strokeWidth={1.5} />
      <path
        d={`M ${x0} ${y0} L ${x0 + dx * steps} ${y0} L ${x0 + dx * steps} ${y0 - dy * steps} Z`}
        fill={C.bone}
        stroke="none"
      />
      <path d={d} fill="none" stroke={C.ink} strokeOpacity={0.85} strokeWidth={2} />
      <line
        x1={x0 + 34}
        y1={y0 - 128}
        x2={x0 + dx * steps - 24}
        y2={y0 - dy * steps - 68}
        stroke={C.ink}
        strokeOpacity={0.45}
        strokeWidth={1.5}
      />
      <GroundHatch y={850} from={60} to={740} />
    </g>
  );
}

function Courtyard() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.bone} />
      <rect x={150} y={190} width={500} height={620} fill="none" stroke={C.ink} strokeOpacity={0.9} strokeWidth={13} />
      <rect x={318} y={358} width={180} height={180} fill={C.sand} stroke={C.ink} strokeOpacity={0.6} strokeWidth={1.5} />
      {range(8).map((i) => (
        <line
          key={i}
          x1={324 + i * 22}
          y1={532}
          x2={346 + i * 22}
          y2={364}
          stroke={C.ink}
          strokeOpacity={0.22}
          strokeWidth={1}
        />
      ))}
      <line x1={157} y1={538} x2={318} y2={538} stroke={C.ink} strokeOpacity={0.7} strokeWidth={6} />
      <line x1={498} y1={430} x2={643} y2={430} stroke={C.ink} strokeOpacity={0.7} strokeWidth={6} />
      <rect x={362} y={798} width={92} height={18} fill={C.bone} />
      <path d="M 454 810 A 92 92 0 0 0 362 718" fill="none" stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      <line x1={362} y1={810} x2={362} y2={718} stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      <circle cx={688} cy={122} r={26} fill="none" stroke={C.ink} strokeOpacity={0.6} strokeWidth={1.5} />
      <line x1={688} y1={148} x2={688} y2={82} stroke={C.ink} strokeOpacity={0.7} strokeWidth={1.5} />
      <path d="M 688 82 L 681 98 L 695 98 Z" fill={C.ink} fillOpacity={0.8} />
      <line x1={150} y1={880} x2={650} y2={880} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
      <line x1={150} y1={872} x2={150} y2={888} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
      <line x1={650} y1={872} x2={650} y2={888} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
    </g>
  );
}

function Colonnade() {
  const cols = range(5).map((i) => 116 + i * 132);
  return (
    <g>
      <rect width={800} height={1000} fill={C.plaster} />
      <rect x={88} y={228} width={624} height={20} fill={C.bone} stroke={C.ink} strokeOpacity={0.7} strokeWidth={1.5} />
      {cols.map((x, i) => (
        <g key={i}>
          <polygon
            points={`${x},840 ${x + 30},840 ${x + 96},916 ${x + 66},916`}
            fill={C.ink}
            fillOpacity={0.09}
          />
          <rect x={x} y={248} width={30} height={592} fill={C.bone} stroke={C.ink} strokeOpacity={0.7} strokeWidth={1.5} />
          <line x1={x - 8} y1={266} x2={x + 38} y2={266} stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
        </g>
      ))}
      <line x1={60} y1={840} x2={740} y2={840} stroke={C.ink} strokeWidth={2} />
    </g>
  );
}

function Tower() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.bone} />
      <line x1={400} y1={118} x2={400} y2={168} stroke={C.ink} strokeOpacity={0.6} strokeWidth={1.5} />
      <rect x={374} y={168} width={52} height={682} fill={C.sand} stroke={C.ink} strokeOpacity={0.6} strokeWidth={1.5} />
      {range(17).map((i) => (
        <line
          key={i}
          x1={238}
          y1={196 + i * 39}
          x2={562}
          y2={196 + i * 39}
          stroke={C.ink}
          strokeOpacity={0.55}
          strokeWidth={2}
        />
      ))}
      <line x1={258} y1={196} x2={258} y2={850} stroke={C.ink} strokeOpacity={0.25} strokeWidth={1} />
      <line x1={542} y1={196} x2={542} y2={850} stroke={C.ink} strokeOpacity={0.25} strokeWidth={1} />
      <GroundHatch y={850} />
    </g>
  );
}

function Plan() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.bone} />
      <path
        d="M 180 210 H 620 V 800 H 180 Z"
        fill="none"
        stroke={C.ink}
        strokeOpacity={0.85}
        strokeWidth={11}
      />
      <line x1={180} y1={520} x2={444} y2={520} stroke={C.ink} strokeOpacity={0.75} strokeWidth={7} />
      <line x1={444} y1={520} x2={444} y2={800} stroke={C.ink} strokeOpacity={0.75} strokeWidth={7} />
      <rect x={444} y={520} width={72} height={12} fill={C.bone} />
      <path d="M 516 526 A 72 72 0 0 0 444 454" fill="none" stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      <line x1={444} y1={526} x2={444} y2={454} stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      <circle cx={300} cy={664} r={44} fill="none" stroke={C.ink} strokeOpacity={0.45} strokeWidth={1.5} />
      <rect x={496} y={264} width={84} height={148} fill={C.sand} stroke={C.ink} strokeOpacity={0.45} strokeWidth={1.5} />
      <rect x={228} y={264} width={148} height={110} fill="none" stroke={C.ink} strokeOpacity={0.35} strokeWidth={1.5} />
      <line x1={180} y1={158} x2={620} y2={158} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
      <line x1={180} y1={150} x2={180} y2={166} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
      <line x1={620} y1={150} x2={620} y2={166} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1} />
    </g>
  );
}

function Vault() {
  const insets = [0, 52, 104, 150];
  return (
    <g>
      <rect width={800} height={1000} fill={C.sand} />
      <path d="M 116 820 Q 400 236 684 820 Z" fill={C.plaster} stroke="none" />
      {insets.map((inset, i) => (
        <path
          key={i}
          d={`M ${116 + inset} 820 Q 400 ${236 + inset * 2.4} ${684 - inset} 820`}
          fill="none"
          stroke={C.ink}
          strokeOpacity={0.6 - i * 0.12}
          strokeWidth={i === 0 ? 2 : 1.5}
        />
      ))}
      <line x1={116} y1={820} x2={116} y2={764} stroke={C.ink} strokeOpacity={0.6} strokeWidth={2} />
      <line x1={684} y1={820} x2={684} y2={764} stroke={C.ink} strokeOpacity={0.6} strokeWidth={2} />
      <GroundHatch y={820} from={64} to={736} />
    </g>
  );
}

function Skylight() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.night} />
      <polygon points="352,96 448,96 566,860 234,860" fill={C.bone} fillOpacity={0.1} />
      <polygon points="382,96 418,96 496,860 304,860" fill={C.bone} fillOpacity={0.14} />
      <ellipse cx={400} cy={92} rx={48} ry={13} fill="none" stroke={C.bone} strokeOpacity={0.8} strokeWidth={1.5} />
      <ellipse cx={400} cy={860} rx={168} ry={17} fill={C.sand} fillOpacity={0.22} />
      <line x1={120} y1={860} x2={680} y2={860} stroke={C.bone} strokeOpacity={0.45} strokeWidth={1.5} />
      <line x1={140} y1={200} x2={140} y2={860} stroke={C.bone} strokeOpacity={0.15} strokeWidth={1} />
      <line x1={660} y1={200} x2={660} y2={860} stroke={C.bone} strokeOpacity={0.15} strokeWidth={1} />
    </g>
  );
}

function Portrait() {
  return (
    <g>
      <rect width={800} height={1000} fill={C.plaster} />
      {range(9).map((i) => (
        <line
          key={i}
          x1={80 + i * 80}
          y1={60}
          x2={80 + i * 80}
          y2={940}
          stroke={C.ink}
          strokeOpacity={0.05}
          strokeWidth={1}
        />
      ))}
      <rect x={170} y={140} width={460} height={640} fill={C.bone} stroke={C.ink} strokeOpacity={0.5} strokeWidth={1.5} />
      <line x1={170} y1={560} x2={630} y2={560} stroke={C.ink} strokeOpacity={0.18} strokeWidth={1} />
      <path
        d="M 230 780 C 258 592 542 592 570 780 Z"
        fill={C.sand}
        stroke={C.ink}
        strokeOpacity={0.55}
        strokeWidth={1.5}
      />
      <rect x={368} y={452} width={64} height={190} fill={C.sand} />
      <circle cx={400} cy={368} r={108} fill={C.sand} stroke={C.ink} strokeOpacity={0.55} strokeWidth={1.5} />
      <line x1={170} y1={820} x2={630} y2={820} stroke={C.ink} strokeOpacity={0.4} strokeWidth={1} />
    </g>
  );
}

const MOTIFS: Record<Motif, () => React.ReactElement> = {
  facade: Facade,
  arches: Arches,
  stair: Stair,
  courtyard: Courtyard,
  colonnade: Colonnade,
  tower: Tower,
  plan: Plan,
  vault: Vault,
  skylight: Skylight,
  portrait: Portrait,
};

export function PlateArt({
  motif,
  className,
}: {
  motif: Motif;
  className?: string;
}) {
  const Art = MOTIFS[motif];
  return (
    <svg
      viewBox="0 0 800 900"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  );
}
