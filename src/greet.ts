const formatter = new Intl.DateTimeFormat('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  fractionalSecondDigits: 3,
  hour12: false,
  timeZoneName: 'short'
})

export function greet(name: string = 'world'): string {
  const now = new Date()
  const formattedTime = formatter.format(now)
  console.log('greet:', formattedTime)
  return `👋 hello ${name} ${formattedTime} 🚀`
}
