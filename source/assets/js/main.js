console.log('Hey there! 👋 Welcome to my site.')

function friendlyGreeting() {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()
  const greetingElement = document.getElementById('time-of-day')
  const morningSun = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--morning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `

  const afternoonSun = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--morning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `

  const eveningMoon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon--evening" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  `

  if (currentHour > 2 && currentHour <= 11) {
    greetingElement.innerHTML = `morning! ${morningSun}`
  }
  else if (currentHour >= 12 && currentHour <= 17) {
    greetingElement.innerHTML = `afternoon! ${afternoonSun}`
  }
  else {
    greetingElement.innerHTML = `evening! ${eveningMoon}`
  }
}

function yearsOfExperience() {
  const experience = document.getElementById('experience')
  const startDate = new Date('4/01/2009').getFullYear();
  const today = new Date().getFullYear();
  experience.innerHTML = `${today - startDate}`
}


friendlyGreeting()
yearsOfExperience()
