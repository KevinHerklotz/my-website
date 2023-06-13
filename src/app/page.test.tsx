import React from 'react'

import { render, screen } from '@testing-library/react'

import Home from './page'

describe('<Home />', () => {
  describe('should not render a link twice to avoid a bad copy and paste and all links should be opened in new tab', () => {
    render(<Home />)
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
  })
  it('should render all the sections', () => {
    render(<Home />)
    screen.getByAltText(/picture of myself/i)
    screen.getByText(/Senior Frontend Developer/i)
    screen.getByText(/What I love/i)
    screen.getByText(/Tools I love the most/i)
    screen.getByText(/Other tools/i)
    screen.getByText(/Tools I would love to use more/i)
    screen.getByText(/Where I get my inspiration from/i)
    screen.getByText(/What others say about me/i)
    screen.getByText(/You need more infos/i)
  })
})
