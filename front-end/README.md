This is the repo for the front end of the application. This is written in React.js which is a javascript framework that makes writing dynamic webapps a lot easier. 

As the repo is written in React we will be conducting unit tests using React Testing Library (RTL) with the docs being here https://testing-library.com/docs/react-testing-library/intro/

Here is an example of a typical unit test in RTL: 

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Fetch url="/greeting" />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})

Unit tests come in 3 steps Arrange, Act and Assert. ARRANGE is where we setup what we want to test (including anything the unit relies on being mocked). ACT is where we do something to invoke the conditions we are testing (pressing a button for example). ASSERT is where we check that the correct state in the unit was reached after we performed some actions. We can see in the example above the comments denote what each section is. This structure is not unique to RTL but a language agnostic structure to unit tests. The above example will just render the webpage from that url, click on the button with the text 'Load Greeting' and then check that the correct text has been rendered and the previous button disabled