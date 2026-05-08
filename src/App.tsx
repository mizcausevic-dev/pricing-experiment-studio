import './styles.css'
import {
  actionQueue,
  elasticityRows,
  experimentCards,
  guardrails,
  heroMetrics,
  packageLadders,
  scenarioCards,
} from './data'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-layout">
        <div className="hero-copy">
          <p className="kicker">Pricing Experiment Studio</p>
          <h1>Design pricing changes like a controlled revenue system, not a blind leap of faith.</h1>
          <p className="lead">
            Premium internal workspace for package ladder tests, elasticity signals, checkout framing, and
            commercialization decisions that need to preserve both revenue and trust.
          </p>
          <div className="hero-links">
            <a href="https://kineticgain.com/" target="_blank" rel="noreferrer" className="primary-link">
              Kinetic Gain
            </a>
            <a href="https://mizcausevic.com/skills/" target="_blank" rel="noreferrer" className="secondary-link">
              Skills / Portfolio
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-heading">
            <div>
              <p className="eyebrow">Commercial pressure</p>
              <h2>What leadership needs to know right now</h2>
            </div>
            <span className="annotation">Revenue impact under active experimentation</span>
          </div>

          <div className="metric-grid">
            {heroMetrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.detail}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase-grid">
        <article className="panel panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Package architecture</p>
              <h2>Make the offer easier to understand before asking buyers to pay more for it.</h2>
            </div>
            <span className="annotation">Package ladder under active test</span>
          </div>

          <div className="ladder-grid">
            {packageLadders.map((tier) => (
              <article key={tier.tier} className="ladder-card">
                <div className="ladder-topline">
                  <p className="tier-label">{tier.tier}</p>
                  <span className="tier-price">{tier.price}</span>
                </div>
                <strong>{tier.audience}</strong>
                <p className="ladder-highlight">{tier.highlight}</p>
                <ul>
                  {tier.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Live portfolio</p>
              <h2>Which pricing moves are worth promoting, holding, or killing</h2>
            </div>
          </div>

          <div className="experiment-list">
            {experimentCards.map((experiment) => (
              <article key={experiment.name} className="experiment-card">
                <div className="experiment-topline">
                  <strong>{experiment.name}</strong>
                  <span className={`state-pill state-${experiment.state.toLowerCase().replace(/\s+/g, '-')}`}>
                    {experiment.state}
                  </span>
                </div>
                <div className="experiment-meta">
                  <div>
                    <small>Weighted lift</small>
                    <b>{experiment.lift}</b>
                  </div>
                  <div>
                    <small>Confidence</small>
                    <b>{experiment.confidence}</b>
                  </div>
                  <div>
                    <small>Risk</small>
                    <b>{experiment.risk}</b>
                  </div>
                </div>
                <p>{experiment.summary}</p>
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="panel panel-split">
        <div>
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Elasticity map</p>
              <h2>Not every audience responds to price pressure the same way.</h2>
            </div>
          </div>

          <div className="cohort-grid">
            {elasticityRows.map((row) => (
              <article key={row.cohort} className="cohort-card">
                <div className="cohort-header">
                  <p className="cohort-label">{row.cohort}</p>
                  <span className="tolerance-pill">{row.tolerance}</span>
                </div>
                <div className="cohort-metrics">
                  <div>
                    <span>Conversion</span>
                    <strong>{row.conversion}</strong>
                  </div>
                  <div>
                    <span>ARPA</span>
                    <strong>{row.arpa}</strong>
                  </div>
                </div>
                <small>{row.narrative}</small>
              </article>
            ))}
          </div>
        </div>

        <div className="side-column">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Scenario board</p>
              <h2>Where to lean if the business needs a different kind of win</h2>
            </div>
          </div>

          <div className="scenario-list">
            {scenarioCards.map((scenario) => (
              <article key={scenario.title} className="scenario-card">
                <strong>{scenario.title}</strong>
                <span>{scenario.outcome}</span>
                <b>{scenario.impact}</b>
                <p>{scenario.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase-grid">
        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Guardrails</p>
              <h2>Pricing tests still need operational and trust constraints</h2>
            </div>
          </div>

          <div className="guardrail-list">
            {guardrails.map((guardrail) => (
              <article key={guardrail.label} className="guardrail-card">
                <div className="guardrail-header">
                  <strong>{guardrail.label}</strong>
                  <span>{guardrail.status}</span>
                </div>
                <b>{guardrail.measure}</b>
                <p>{guardrail.note}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Action queue</p>
              <h2>What pricing, product, and revenue teams should do next</h2>
            </div>
          </div>

          <div className="queue-grid">
            {actionQueue.map((item) => (
              <article key={item.title} className="queue-card">
                <div className="queue-topline">
                  <span className="priority">{item.priority}</span>
                  <span className="due-pill">{item.due}</span>
                </div>
                <strong>{item.title}</strong>
                <p>{item.owner}</p>
              </article>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
