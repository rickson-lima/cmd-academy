export const TOKEN_KEY = "@cmdAcademy-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (data) => {
  localStorage.setItem(TOKEN_KEY, data.token);

  const userData = data.user;

  for (const key of Object.keys(userData)) {
    localStorage.setItem(key, userData[key]);
  }
};
export const logout = () => {
  localStorage.clear();
};
