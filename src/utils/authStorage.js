export const saveAuth = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const getAuth = () => ({
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")),
});

export const logout = () => {
  localStorage.clear();
};
