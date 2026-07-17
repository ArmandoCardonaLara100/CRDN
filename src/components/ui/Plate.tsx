import Image from "next/image";
import type { PlateSpec } from "@/lib/content";
import { PlateArt } from "./PlateArt";

interface PlateProps {
  plate: PlateSpec;
  /** Monograph plate number, e.g. "01". Omit to hide the prefix. */
  number?: string;
  aspectClass?: string;
  captioned?: boolean;
  /** Scales the artwork on parent `group` hover. */
  zoom?: boolean;
  className?: string;
  sizes?: string;
  dark?: boolean;
}

/**
 * A numbered monograph plate: hairline-framed image area with a drafting-style
 * caption. Renders the placeholder drawing until `plate.src` points to a real
 * photograph.
 */
export function Plate({
  plate,
  number,
  aspectClass = "aspect-[4/5]",
  captioned = true,
  zoom = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  dark = false,
}: PlateProps) {
  const zoomClass = zoom
    ? " transition-transform duration-700 ease-studio group-hover:scale-[1.04]"
    : "";

  return (
    <figure className={className}>
      <div
        role="img"
        aria-label={plate.alt}
        className={`relative overflow-hidden border bg-plaster ${aspectClass} ${
          dark ? "border-bone/20" : "border-ink/10"
        }`}
      >
        {plate.src ? (
          <Image
            src={plate.src}
            alt=""
            fill
            sizes={sizes}
            className={`object-cover${zoomClass}`}
          />
        ) : (
          <PlateArt
            motif={plate.motif}
            className={`absolute inset-0 h-full w-full${zoomClass}`}
          />
        )}
      </div>
      {captioned && (
        <figcaption
          className={`eyebrow mt-3 flex items-baseline justify-between gap-6 ${
            dark ? "text-bone/60" : "text-umber"
          }`}
        >
          <span className="truncate">
            {number ? `Plate ${number} — ` : ""}
            {plate.caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
