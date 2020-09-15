import validator from "validator";

export const validateEmail = (email: string) => {
  if (validator.isEmpty(email)) {
    return "Email is required";
  } else if (!validator.isEmail(email)) {
    return "Invalid email";
  }
  return false;
};

export const validatePassword = (password: string) => {
  if (validator.isEmpty(password)) {
    return "Password is required";
  } else if (!validator.isLength(password, { min: 8 })) {
    return "Password should be minimum 8 characters";
  }
  return false;
};

export const validateUsername = (username: string) => {
  if (validator.isEmpty(username)) {
    return "username  is required";
  }
  return false;
};
