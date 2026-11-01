import Image from "next/image";
import AmbientMotion from "./ambient-motion";

export default function Home() {
  return (
    <main className="launch">
      <AmbientMotion />
      <div className="city" aria-hidden="true">
        <Image src="/images/cidade-eletrica.webp" alt="" fill sizes="100vw" priority quality={90} />
      </div>
      <div className="atmosphere" aria-hidden="true" />
      <div className="light-sweep" aria-hidden="true" />
      <header className="launch-header">
        <span className="header-label">O futuro ganha movimento</span>
        <span className="launch-status"><span className="status-light" /> Em preparação</span>
      </header>
      <section className="launch-center" aria-labelledby="launch-title">
        <div className="logo-perspective">
          <div className="logo-parallax">
            <div className="logo-float">
              <Image className="launch-logo" src="/images/logo-pulso-volts.webp" alt="Pulso Volts" width={1400} height={560} sizes="(min-width: 768px) 580px, 88vw" priority />
            </div>
          </div>
        </div>
        <div className="announcement">
          <p className="launch-eyebrow">Uma nova energia está chegando</p>
          <h1 id="launch-title">Em breve<span>.</span></h1>
          <p className="launch-description">Prepare-se para sentir o próximo pulso<br className="desktop-break" /> da mobilidade elétrica.</p>
        </div>
        <div className="energy-line" aria-hidden="true"><span /></div>
        <p className="launch-signature">Seu caminho. Sua energia. Um novo amanhã.</p>
      </section>
      <footer className="launch-footer">
        <span>Mobilidade elétrica <span className="footer-divider">/</span> Novas possibilidades</span>
        <span>© {new Date().getFullYear()} Pulso Volts</span>
      </footer>
    </main>
  );
}
