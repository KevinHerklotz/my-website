/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom'
import React from 'react'

global.React = React

// needed for 'react-slick' slider
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }))
