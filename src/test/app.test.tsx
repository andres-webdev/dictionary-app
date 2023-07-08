import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "../App";
import userEvent from "@testing-library/user-event"

describe('App test components', () => {
  test('Should request to the api and save the response', async () => {

    render(<App />)

    const input = screen.getByRole('textbox')
    const submitBtn = screen.getByTestId('submit-btn')

    await userEvent.type(input, 'hello')
    await userEvent.click(submitBtn)

    const contentTitle = await screen.findByRole('heading', { level:1 })

    expect(input).toHaveValue('hello')
    waitFor(() => expect(contentTitle.textContent).toEqual('hello'))
  })  
})