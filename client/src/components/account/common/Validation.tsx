import validator from "validator";

export const validateEmail = (email: string): string  => {
  if (validator.isEmpty(email)) {
    return "Email is required";
  } else if (!validator.isEmail(email)) {
    return "Invalid Email";
  }
  else
     return "valid";
};

export const validatePassword = (password: string):string=> {
  if (validator.isEmpty(password)) {
    return "Password is required";
  } else if (!validator.isLength(password, { min: 8 })) {
    return "Password should be minimum 8 characters";
  }
  else
  return "valid";
};

export const validateUsername = (username: string):string => {
  if (validator.isEmpty(username)) {
    return "username  is required";
  }
  else
  return "valid";
};
