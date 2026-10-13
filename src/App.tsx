import { useEffect, useState } from "react";
import { contactLinks, goals, projects, studyGroups } from "./portfolioData";

const terminalLines = [
  { language: "Python", code: 'print("Hello, World!")' },
  { language: "C", code: 'printf("Hello, World!");' },
  { language: "Java", code: 'System.out.println("Hello, World!");' },
  { language: "JavaScript", code: 'console.log("Hello, World!");' },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon">
      <path d="M8 5h11v11M19 5 9 15M16 12v7H5V8h7" />
    </svg>
  );
}

function Spark({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`spark ${className}`} />;
}

function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

function App() {
  const [terminalIndex, setTerminalIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalIndex((current) => (current + 1) % terminalLines.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  const terminal = terminalLines[terminalIndex];

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#inicio" aria-label="Ir para o início">
          dany<span>.</span>dev
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">sobre</a>
          <a href="#metas">metas</a>
          <a href="#projetos">projetos</a>
        </nav>
        <a className="nav-cta" href="#contato">
          bora conversar
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-blob" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            disponível para aprender muito
          </div>
          <p className="hero-kicker">Oi, eu sou a</p>
          <h1>
            Danielly
            <span>Dany, pros íntimos.</span>
          </h1>
          <p className="manifesto">
            constante aprendizado,
            <br />
            <strong>infinitas possibilidades.</strong>
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              ver meus projetos <ArrowIcon />
            </a>
            <a className="text-link" href="#sobre">
              descobrir minha jornada
            </a>
          </div>
        </div>

        <div className="hero-playground">
          <Spark className="spark-one" />
          <Spark className="spark-two" />
          <div className="terminal" aria-live="polite">
            <div className="terminal-topbar">
              <div className="terminal-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span>hello-world.{terminal.language.toLowerCase()}</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="prompt">dany@dev</span>:<span>~</span> run
              </p>
              <code key={terminal.code}>{terminal.code}</code>
              <p className="terminal-result">
                Hello, World!<span className="cursor">_</span>
              </p>
              <div className="language-switcher" aria-label="Linguagem atual">
                {terminalLines.map((line, index) => (
                  <span
                    className={index === terminalIndex ? "active" : ""}
                    key={line.language}
                  >
                    {line.language}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="sticky-note">
            <span>nota mental:</span>
            errar, debugar,
            <br />
            aprender, repetir.
            <div className="tape" aria-hidden="true" />
          </div>
        </div>

        <a className="scroll-cue" href="#sobre">
          <span>scroll pra conhecer</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-title">
          <p className="eyebrow">01 — um pouco sobre mim</p>
          <h2>
            Curiosa por natureza.
            <br />
            Dev por escolha.
          </h2>
          <span className="handwritten-arrow" aria-hidden="true">
            ↳ é por aqui!
          </span>
        </div>
        <div className="about-copy">
          <p className="lead">
            Tenho <strong>19 anos</strong>, moro em{" "}
            <strong>Tarumirim, Minas Gerais</strong>, e vou até Caratinga para
            cursar o 4º semestre de Ciência da Computação.
          </p>
          <p>
            Tecnologia me ganhou pela possibilidade de transformar ideias em
            coisas que funcionam de verdade. Gosto da lógica por trás do código,
            mas gosto ainda mais do impacto que ele pode criar.
          </p>
          <p>
            Agora, estou entrando na minha primeira experiência de estágio,
            aprofundando meus conhecimentos em banco de dados e construindo
            projetos em Python e C. O plano? Evoluir um commit por vez — sem
            medo do temido bug de sexta-feira.
          </p>
          <div className="about-tags" aria-label="Resumo">
            <span>4º semestre</span>
            <span>estágio conquistado</span>
            <span>Tarumirim · MG</span>
          </div>
        </div>
        <div className="code-doodle" aria-hidden="true">
          <span>{"{"}</span>
          <p>curiosidade: "infinita",</p>
          <p>café: false</p>
          <span>{"}"}</span>
        </div>
      </section>

      <section className="journey section-shell" id="metas">
        <SectionHeading
          eyebrow="02 — mapa de evolução"
          title="As próximas fases"
          note="Não é corrida de velocidade. É campanha longa, com XP acumulado e vários checkpoints."
        />
        <div className="journey-map">
          <div className="journey-path" aria-hidden="true" />
          {goals.map((goal, index) => (
            <article className={`goal goal-${index + 1}`} key={goal.title}>
              <div className="goal-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="goal-copy">
                <span className="goal-status">{goal.status}</span>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </div>
            </article>
          ))}
          <div className="finish-flag" aria-label="Próxima fase em construção">
            <span>próxima fase</span>
            <strong>∞</strong>
          </div>
        </div>
      </section>

      <section className="studies section-shell" id="estudos">
        <div className="studies-intro">
          <SectionHeading
            eyebrow="03 — meu inventário"
            title="Plano de estudos"
            note="O que está rodando na minha cabeça (e no meu Notion) agora."
          />
          <div className="priority-legend" aria-label="Legenda de prioridade">
            <span>
              <i className="priority-dot high" /> alta
            </span>
            <span>
              <i className="priority-dot medium" /> média
            </span>
            <span>
              <i className="priority-dot low" /> baixa
            </span>
          </div>
        </div>
        <div className="study-board">
          {studyGroups.map((group, groupIndex) => (
            <article
              className={`study-column study-column-${groupIndex + 1}`}
              key={group.category}
            >
              <div className="study-heading">
                <span>{group.number}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="study-list">
                {group.items.map((item) => (
                  <div className="study-item" key={item.name}>
                    <div>
                      <p>{item.name}</p>
                      <span className={`priority-label ${item.priority}`}>
                        prioridade {item.priorityLabel}
                      </span>
                    </div>
                    <div
                      className={`energy ${item.priority}`}
                      aria-label={`Prioridade ${item.priorityLabel}`}
                    >
                      {[0, 1, 2].map((segment) => (
                        <span key={segment} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <SectionHeading
          eyebrow="04 — construindo na prática"
          title="Projetos que saíram do papel"
          note="Ideias, algumas linhas de código e aquela insistência saudável até funcionar."
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <div className="project-meta">
                <span>projeto_{String(index + 1).padStart(2, "0")}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-visual">
                <span className="project-monogram">{project.monogram}</span>
                <div className="project-window">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="project-label">{project.label}</span>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <ExternalIcon />
                </a>
                <a href={project.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <ExternalIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contato">
        <div className="contact-orbit orbit-one" aria-hidden="true" />
        <div className="contact-orbit orbit-two" aria-hidden="true" />
        <p className="eyebrow">05 — chegou até aqui?</p>
        <h2>
          Então bora criar
          <br />
          algo <em>incrível.</em>
        </h2>
        <p className="contact-copy">
          Estou sempre aberta a boas conversas, novas conexões e oportunidades
          que me façam aprender. Me chama — prometo responder sem usar
          <code> setTimeout()</code>.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label} target={link.external ? "_blank" : undefined} rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
              <ExternalIcon />
            </a>
          ))}
        </div>
        <div className="contact-signoff">
          <span>feito com curiosidade e muitos ctrl+s</span>
          <strong>Dany.</strong>
          <span>Tarumirim, MG · 2025</span>
        </div>
      </section>
    </main>
  );
}

export default App;
