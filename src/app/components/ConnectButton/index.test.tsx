import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ConnectButton from '.'

describe('<ConnectButton />', () => {
  it('should render the button and open the dialog on click', async () => {
    const user = userEvent.setup()
    render(<ConnectButton />)

    const button = screen.getByRole('button', { name: /Let's connect/i })
    expect(screen.queryByText(/LinkedIn/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/email/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/copy/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('dialog', { name: /Let's connect/i })).not.toBeInTheDocument()

    await user.click(button)

    await screen.findByRole('dialog', { name: /Let's connect/i })
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i })
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/kevin-herklotz-70407a153/'
    )
    screen.getByText(/email/i)
    const emailLink = screen.getByRole('link', { name: /hello@clean-code-kevin.ch/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:hello@clean-code-kevin.ch')

    screen.getByRole('button', { name: /copy/i })
  })
})
