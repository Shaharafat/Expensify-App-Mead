const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`
test('adds 1 + 2 to equal 3', () => {
  const result = add(1,2)
  expect(result).toBe(3)
});

test('generate a greeting for name', () => {
  const result = generateGreeting('Arafat');
  expect(result).toBe('Hello Arafat!')
})

test('should generate greeting for no name', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonymous!')
})