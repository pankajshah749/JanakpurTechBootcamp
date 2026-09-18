import { ArrowLeft, ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import siteData from "../data/siteData.json";
import AdvantagesSection from "./landing/AdvantagesSection";
import BootcampHeader from "./landing/BootcampHeader";
import SectionIntro from "./landing/SectionIntro";
import SiteFooter from "./landing/SiteFooter";
import PartnersSection from "./landing/PartnersSection";

const impact = {
  id: "sponsor-impact",
  kicker: "02 / WHY PARTNER WITH US",
  titleLines: ["A partnership with", "visible, local impact."],
  accentLine: 1,
  text: "Support the next generation of technology talent while building authentic visibility and relationships across Madhesh’s growing tech community.",
  items: [
    { number: "01", icon: "sparkles", title: "Meaningful brand visibility", text: "Reach students, young professionals, families, educators, and the regional technology community through trusted program channels." },
    { number: "02", icon: "code", title: "Early access to talent", text: "Meet emerging developers through portfolios, Demo Day, workshops, recruitment conversations, and participant resumes." },
    { number: "03", icon: "rocket", title: "Direct community impact", text: "Help expand practical technology education and career opportunities for learners outside Kathmandu." },
    { number: "04", icon: "layers", title: "A flexible partnership", text: "Contribute through funding, workshops, mentorship, career sessions, tools, or opportunities aligned with your organization." },
  ],
};

const tierIntro = {
  kicker: "01 / SPONSORSHIP TIERS",
  titleLines: ["Choose your level", "of impact."],
  accentLine: 1,
  text: "Every tier creates direct value for learners while connecting your organization with Madhesh’s growing technology community.",
};

const tiers = [
  { name: "Platinum Sponsor", amount: "NPR 300,000+", label: "TITLE PARTNER", tone: "platinum", featured: true, benefits: ["Title Sponsor recognition", "Prominent logo placement on event banners and promotional materials", "Featured placement across official social-media campaigns", "Logo placement on the official website, certificates, and event materials", "Keynote speech opportunity", "Access to participant resumes and portfolios", "Opportunity to host a workshop or seminar", "Recognition in press releases and media coverage"] },
  { name: "Gold Sponsor", amount: "NPR 100,000–299,999", label: "PROGRAM PARTNER", tone: "gold", benefits: ["Logo placement on event banners and promotional materials", "Featured recognition on official social-media campaigns", "Logo placement on the official website", "Logo on certificates and selected event materials", "Opportunity to host a session or workshop", "Access to participant resumes for recruitment", "Recognition in selected media and promotional content"] },
  { name: "Silver Sponsor", amount: "NPR 50,000–99,999", label: "COMMUNITY PARTNER", tone: "silver", benefits: ["Logo placement on event banners and promotional materials", "Recognition on official social-media posts and campaigns", "Logo placement on the official website", "Logo on selected event materials", "Networking opportunities with participants", "Mention in selected social-media and promotional content"] },
];

export default function Sponsorship() {
  const { footer, navigation, site, partnerships } = siteData;
  const inquiry = "mailto:janakpurtechbootcamp@gmail.com?subject=Bootcamp%203.0%20Sponsorship%20Inquiry";

  return (
    <div className="bootcamp-site">
      <BootcampHeader />
      <main>
        <section className="sponsor-dedicated-hero" id="top">
          <div className="sponsor-dedicated-copy">
            <a className="sponsor-back-link" href="/"><ArrowLeft size={16} /> Back to Bootcamp 3.0</a>
            <p className="section-kicker">PARTNER WITH JANAKPUR TECH BOOTCAMP</p>
            <h1>Back the builders.<br /><em>Shape what comes next.</em></h1>
            <p>Support practical technology education in Madhesh while connecting your organization with ambitious learners, emerging talent, and a growing regional technology community.</p>
            <div className="sponsor-dedicated-actions">
              <a className="primary-action" href="#sponsorship-tiers">View sponsorship tiers <ArrowRight size={20} /></a>
              <a className="text-action" href={inquiry}>Talk to our team</a>
            </div>
          </div>
          <aside className="sponsor-title-opportunity">
            <span className="sponsor-title-label">{partnerships.titleOpportunity.label}</span>
            <div className="sponsor-logo-placeholder"><span>{partnerships.titleOpportunity.placeholder}</span></div>
            <h2>{partnerships.titleOpportunity.title}</h2>
            <p>{partnerships.titleOpportunity.text}</p>
            <a href={inquiry}>Become the title sponsor <ArrowRight size={18} /></a>
          </aside>
        </section>

        <section className="curriculum-section sponsor-template-tiers" id="sponsorship-tiers">
          <SectionIntro section={tierIntro} />
          <div className="sponsor-template-tier-list">
            {tiers.map((tier, index) => (
              <article className={`sponsor-template-tier tier-${tier.tone}${tier.featured ? " is-featured" : ""}`} key={tier.name}>
                <div className="sponsor-template-tier-heading">
                  <span className="mono-label">0{index + 1} / {tier.label}</span>
                  <h3>{tier.name}</h3>
                  <strong>{tier.amount}</strong>
                </div>
                <ul>{tier.benefits.map(benefit => <li key={benefit}><Check size={17} aria-hidden="true" />{benefit}</li>)}</ul>
                <a href={inquiry}>Discuss this partnership <ArrowRight size={18} /></a>
              </article>
            ))}
          </div>
        </section>

        <PartnersSection partnerships={partnerships} />
        <AdvantagesSection advantages={impact} />

        <section className="final-cta sponsor-template-contact">
          <p className="section-kicker">03 / LET’S BUILD TOGETHER</p>
          <h2>Make a visible impact.<br /><em>Start with a conversation.</em></h2>
          <p>We would be happy to discuss a sponsorship package aligned with your organization’s goals and build a meaningful partnership for Bootcamp 3.0.</p>
          <div className="sponsor-template-contact-details">
            <a href="mailto:janakpurtechbootcamp@gmail.com"><Mail size={17} />janakpurtechbootcamp@gmail.com</a>
            <a href="tel:+9779804885027"><Phone size={17} />+977 9804885027</a>
            <span><MapPin size={17} />Janakpurdham, Madhesh, Nepal</span>
          </div>
          <div className="cta-action"><a href={inquiry}>Become a sponsor <ArrowRight size={21} /></a></div>
        </section>
      </main>
      <SiteFooter footer={footer} navigation={navigation} site={site} homeLinkPrefix="/" />
    </div>
  );
}
