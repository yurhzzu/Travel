let defaultCity = '三亚'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defaultCity
}
