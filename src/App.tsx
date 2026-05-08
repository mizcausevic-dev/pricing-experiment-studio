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
      <section className="panel hero-panel metro-panel">
        <div className="hero-copy metro-copy">
          <p className="kicker">Pricing Experiment Studio</p>
          <h1>Controlled monetization for teams that need revenue lift without breaking trust.</h1>
          <p className="lead">
            Package ladders, elasticity signals, experiment posture, and pricing action sequencing in one calm,
            operator-friendly surface.
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

        <div className="metric-grid metro-grid">
          {heroMetrics.map((metric) => (
            <article key={metric.label} className="metric-card metro-tile">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.detail}</small>
            </article>
          ))}
        </div>

        <div className="decision-grid">
          {experimentCards.slice(0, 2).map((experiment) => (
            <article key={experiment.name} className="experiment-card decision-card metro-tile">
              <div className="experiment-topline">
                <p className="eyebrow">{experiment.state}</p>
              </div>
              <strong>{experiment.name}</strong>
              <div className="decision-numberline">
                <b>{experiment.lift}</b>
                <span>{experiment.confidence} confidence</span>
              </div>
              <p>{experiment.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel metro-panel">
        <article className="panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Package architecture</p>
              <h2>Four clean offers. One test lane. No visual chaos.</h2>
            </div>
            <span className="annotation">Balanced package ladder</span>
          </div>

          <div className="ladder-grid">
            {packageLadders.map((tier) => (
              <article
                key={tier.tier}
                className={`ladder-card metro-tile ${tier.tier === 'Growth' ? 'ladder-card-featured' : ''}`}
              >
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
                {tier.tier === 'Growth' ? <span className="feature-chip">Primary test lane</span> : null}
              </article>
            ))}
          </div>
        </article>
      </section>

      <section className="panel metro-panel">
        <div className="panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Elasticity map</p>
              <h2>Perfectly balanced cohort tiles. Clear response patterns.</h2>
            </div>
          </div>

          <div className="cohort-grid">
            {elasticityRows.map((row) => (
              <article key={row.cohort} className="cohort-card metro-tile">
                <div className="cohort-header">
                  <p className="cohort-label">{row.cohort}</p>
                </div>
                <small>{row.narrative}</small>
                <div className="cohort-metrics">
                  <div>
                    <span>Conversion</span>
                    <strong>{row.conversion}</strong>
                  </div>
                  <div>
                    <span>ARPA</span>
                    <strong>{row.arpa}</strong>
                  </div>
                  <div>
                    <span>Tolerance</span>
                    <strong className={`tolerance-value tolerance-${row.tolerance.toLowerCase()}`}>{row.tolerance}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel metro-panel">
        <article className="panel-wide">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Guardrails and action queue</p>
              <h2>Preserve trust and activation while you optimize for cash, ARPA, and plan selection.</h2>
            </div>
          </div>

          <div className="guardrail-grid">
            {guardrails.map((guardrail) => (
              <article key={guardrail.label} className="guardrail-card metro-tile">
                <div className="guardrail-header">
                  <strong>{guardrail.label}</strong>
                  <span>{guardrail.status}</span>
                </div>
                <b>{guardrail.measure}</b>
                <p>{guardrail.note}</p>
              </article>
            ))}
          </div>

          <div className="queue-grid queue-grid-metro">
            {actionQueue.map((item) => (
              <article key={item.title} className="queue-card metro-tile">
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

      <section className="panel metro-panel scenario-panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Scenario board</p>
            <h2>Where to lean if the business needs a different kind of win.</h2>
          </div>
        </div>

        <div className="scenario-grid">
          {scenarioCards.map((scenario) => (
            <article key={scenario.title} className="scenario-card metro-tile">
              <strong>{scenario.title}</strong>
              <span>{scenario.outcome}</span>
              <b>{scenario.impact}</b>
              <p>{scenario.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
