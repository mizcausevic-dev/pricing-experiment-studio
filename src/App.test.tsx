import { render, screen } from '@testing-library/react'
import App from './App'

describe('PricingExperimentStudio', () => {
  it('renders pricing experiment content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /controlled monetization for teams that need revenue lift without breaking trust/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/package architecture/i)).toBeInTheDocument()
    expect(screen.getByText(/elasticity map/i)).toBeInTheDocument()
    expect(screen.getByText(/guardrails and action queue/i)).toBeInTheDocument()
  })
})
