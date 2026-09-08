import { ArrowRight, Code2 } from "lucide-react";
import LineTitle from "./LineTitle";
import SmartLink from "./SmartLink";
import iconMap from "./iconMap";

export default function FinalCtaSection({ finalCta }) {
  const FinalIcon = iconMap[finalCta.icon] || Code2;

  return (
    <section className="final-cta" id={finalCta.id}>
      <div className="cta-orbit"><FinalIcon size={34} /></div>
      <p className="section-kicker">{finalCta.kicker}</p>
      <h2><LineTitle lines={finalCta.titleLines} accentLine={finalCta.accentLine} accentElement="em" /></h2>
      <p>{finalCta.text}</p>
      <SmartLink href={finalCta.buttonHref}>{finalCta.buttonLabel} <ArrowRight size={21} /></SmartLink>
    </section>
  );
}
