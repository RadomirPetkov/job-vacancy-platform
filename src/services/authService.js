

export const saveUserToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData))
  console.log(`Succsessful login as: ${userData.email}`);

}

export const saveProfileInfoToLocalStorage = (profileData) => {
  localStorage.setItem("profileData", JSON.stringify(profileData))

}

export const checkData = (userData, setError) => {
  let hasError = false
  if (userData.email.length < 5) {
    setError(oldData => (
      { ...oldData, emailError: "You must fill at least 5 characters" }
    ))
    hasError = true
  }
  else {
    setError(oldData => (
      { ...oldData, emailError: false }
    ))
  }


  if (userData.name.length < 3) {
    setError(oldData => (
      { ...oldData, nameError: "You must fill at least 3 characters" }
    ))
    hasError = true
  }
  else {
    setError(oldData => (
      { ...oldData, nameError: false }
    ))
  }


  if (userData.password.length < 6) {
    setError(oldData => (
      { ...oldData, passwordError: "Your password should be at least 6 characters" }
    ))
    hasError = true
  }
  else {
    setError(oldData => (
      { ...oldData, passwordError: false }
    ))
  }

  return !hasError
}