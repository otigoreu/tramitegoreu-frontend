// LOGIN
export interface LoginApiResponse {
  data: {
    token: string;
    expirationDate: string;
  };
  success: boolean;
  errorMessage: string;
}
export interface LoginRequestBody {
  username: string;
  password: string;
}

//REGISTER
export interface RegisterApiResponse {
  data: {
    userId: string;
    token: string;
    expirationDate: string;
  };
  success: boolean;
  errorMessage: string;
}
export interface RegisterRequestBody {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  confirmPassword: string;
}

//FORGOT PASSWORD
export interface ForgotPasswordApiResponse {
  success: boolean;
  errorMessage: string;
}

export interface ForgotPasswordRequestBody {
  email: string;
}
