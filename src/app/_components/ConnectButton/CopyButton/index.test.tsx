import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi, describe, it, expect } from 'vitest'

import CopyButton from '.'

describe('<CopyButton />', () => {
  it('should not show the button if the browser does not support clipboard', () => {
    Object.assign(navigator, {
      clipboard: undefined,
    })

    render(<CopyButton />)
    expect(screen.queryByText(/copy/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/copied/i)).not.toBeInTheDocument()
  })

  it('should show the button if the browser supports clipboard and clicking it triggers the browser function', async () => {
    const clipboardSpy = vi.fn().mockImplementation(() => Promise.resolve())
    Object.assign(navigator, {
      clipboard: { writeText: clipboardSpy },
    })
    // do not execute `userEvent.setup`, because it would overwrite the clipboard mock/spy

    render(<CopyButton />)

    const copyButton = screen.getByRole('button', { name: /copy/i })
    expect(screen.queryByText(/copied/i)).not.toBeInTheDocument()

    await userEvent.click(copyButton)
    expect(clipboardSpy).toHaveBeenCalledWith('hello@clean-code-kevin.ch')
    expect(screen.queryByText(/copy/i)).not.toBeInTheDocument()
    screen.getByRole('button', { name: /copied/i })
  })
})
