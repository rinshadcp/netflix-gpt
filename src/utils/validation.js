export const validateSigninData = (fullName, email, password) => {
  const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  const isFullNameValid =
    fullName !== null
      ? /^[A-Za-z]{3,16}( [A-Za-z]{3,16}){0,3}$/.test(fullName)
      : true;

  if (!isFullNameValid) return "Full name is not valid";
  if (!emailValid) return "Email is not valid";
  if (!passwordValid) return "Password is not valid";

  return null;
};
