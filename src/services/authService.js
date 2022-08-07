

export const saveUserToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData))
  console.log(`Succsessful login as: ${userData.email}`);

}

export const saveProfileInfoToLocalStorage = (profileData) => {
  localStorage.setItem("profileData", JSON.stringify(profileData))

}