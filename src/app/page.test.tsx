import React from 'react'

import { render, screen } from '@testing-library/react'

import { vi } from 'vitest'
import Home from './page'

vi.mock('next/image')

describe('<Home />', () => {
  it('should render all the sections', () => {
    render(<Home />)
    screen.getByAltText(/picture of myself/i)
    screen.getByText(/Senior Frontend Developer/i)
    screen.getByText(/Testimonials/i)
    screen.getByText(/Success stories/i)
    screen.getByText(/My tech stack/i)
    screen.getByText(/Tools I would love to use more/i)
    screen.getByText(/Where I get my inspiration from/i)
    screen.getByText(/What I love/i)
    screen.getByText(/You need more infos/i)
  })
  describe('should not render a link twice to avoid a bad copy and paste and all links should be opened in new tab', () => {
    const { unmount } = render(<Home />)
    const allLinks = screen.getAllByRole('link') as HTMLAnchorElement[]
    const alreadyParsedLinks: Record<string, boolean> = {}

    allLinks.forEach((linkElement) => {
      it(`${linkElement.href}`, () => {
        expect(linkElement.href).not.toContain('localhost')
        expect(alreadyParsedLinks[linkElement.href]).toBeUndefined()
        expect(linkElement.target).toBe('_blank')
        alreadyParsedLinks[linkElement.href] = true
      })
    })

    unmount()
  })
})
