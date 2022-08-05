

export const saveUserToLocalStorage = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
    console.log(`Succsessful login as: ${userData.email}`);
   
  }