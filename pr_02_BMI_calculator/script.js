const form = document.querySelector('form')
// yaha par value ko extract nahi karna hai taki values jab submit ho tab hi mile

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `<p class="error-message">⚠️ Please enter a valid height!</p>`
        results.className = 'show'
        return
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `<p class="error-message">⚠️ Please enter a valid weight!</p>`
        results.className = 'show'
        return
    }

    // BMI Calculation: if height > 3 assume cm, else meters
    let bmi
    if (height > 3) {
        bmi = (weight / ((height * height) / 10000)).toFixed(1)
    } else {
        bmi = (weight / (height * height)).toFixed(1)
    }

    let category = ''
    let badgeClass = ''

    if (bmi < 18.5) {
        category = 'Underweight'
        badgeClass = 'badge-underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight'
        badgeClass = 'badge-normal'
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = 'Overweight'
        badgeClass = 'badge-overweight'
    } else {
        category = 'Obesity'
        badgeClass = 'badge-obese'
    }

    results.innerHTML = `
        <div class="result-label">Your Calculated BMI</div>
        <div class="result-score">${bmi}</div>
        <span class="result-badge ${badgeClass}">${category}</span>
    `
    results.className = 'show'
})

