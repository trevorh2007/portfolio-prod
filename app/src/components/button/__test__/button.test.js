import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
    ReactDOM.render(<Button></Button>, container)
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="click me please"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})

it("renders button correctly", () => {
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON()
    expect(tree).toMatchSnapshot()
})