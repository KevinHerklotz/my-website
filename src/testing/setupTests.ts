/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/vitest' // adds custom matchers like `toBeInTheDocument`, works also with Vitest
import React from 'react'
import { vi } from 'vitest'

global.React = React

// needed for 'react-slick' slider
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }))

// needed for framer-motion
const intersectionObserverMock = function intersectionObserver() {
  return {
    observe: vi.fn(),
    disconnect: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  }
}

vi.stubGlobal('IntersectionObserver', intersectionObserverMock)
