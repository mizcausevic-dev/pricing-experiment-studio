import { render, screen } from '@testing-library/react'
import App from './App'

describe('PricingExperimentStudio', () => {
  it('renders pricing experiment content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /design pricing changes like a controlled revenue system, not a blind leap of faith/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/package architecture/i)).toBeInTheDocument()
    expect(screen.getByText(/elasticity map/i)).toBeInTheDocument()
    expect(screen.getByText(/guardrails/i)).toBeInTheDocument()
  })
})
