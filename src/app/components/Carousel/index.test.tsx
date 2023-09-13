// Direct Node access is bad practice, but because the Slider library isn't written in the most testable way,
// so unfortunately I have to go around it like that:
/* eslint-disable testing-library/no-node-access, testing-library/no-container */
import React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Home from '.'

describe('<Carousel />', () => {
  it('should only show the initial page first, even though all of them get rendered in the background', () => {
    render(<Home />)
    const [firstSlide, firstSlideCopy] = screen.getAllByText(
      /Optimizing costs and user experience/i
    )
    const [secondSlide, secondSlideCopy] = screen.getAllByText(
      /Optimizing website performance and SEO/i
    )
    expect(firstSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'false')
    expect(firstSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(secondSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(secondSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
  })
  it('should show 9 slides and 9 dots', () => {
    const { container } = render(<Home />)

    expect(container.getElementsByClassName('slick-dots')[0]).toBeInTheDocument()
    expect(container.getElementsByClassName('slick-dots')[0].childNodes).toHaveLength(9)
  })
  it('should show the second page, when clicking next', async () => {
    const user = userEvent.setup()
    render(<Home />)
    const [firstSlide, firstSlideCopy] = screen.getAllByText(
      /Optimizing costs and user experience/i
    )
    const [secondSlide, secondSlideCopy] = screen.getAllByText(
      /Optimizing website performance and SEO/i
    )
    expect(firstSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'false')
    expect(firstSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(secondSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(secondSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')

    await user.click(screen.getByRole('button', { name: /Next/i }))

    expect(firstSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(firstSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')
    expect(secondSlide.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'false')
    expect(secondSlideCopy.closest('.slick-slide')).toHaveAttribute('aria-hidden', 'true')

    // I could continue to test the entire slider, but this should be tested by the library itself.
    // For the future I could try to find a library that is better testable and more configurable.
  })
})
