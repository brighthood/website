import AppError from "./../utils/appError";
import User from "./../model/userModel";
import { catchAsync } from "./../utils/catchAsync";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { clerkClient, getAuth } from "@clerk/express";
import {
  ClerkExpressRequireAuth,
  ClerkExpressWithAuth,
} from "@clerk/clerk-sdk-node";

declare global {
  namespace Express {
    interface Request {
      user?: typeof User | null;
    }
  }
}
const signtoken = (id: any) => {
  const token = jwt.sign({ id }, process.env.JWTSECRETEKEY!);
  return token;
};
const varifytoken = (token: string): jwt.JwtPayload => {
  const decoded = jwt.verify(token, process.env.JWTSECRETEKEY!);
  if (typeof decoded === "string") {
    throw new AppError("Invalid token format", 401);
  }
  return decoded as jwt.JwtPayload;
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, confirmPassword, school, phonenumber } =
      req.body;
    const user = await User.create({
      name,
      email,
      password,
      confirmPassword,
      school,
      phonenumber,
    });
    const token = signtoken(user._id);
    res.status(200).json({
      status: "success",
      token,
      user,
    });
  }
);
export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const { email, password } = req.body;
    // if (!email || !password) {
    //   return next(new AppError("please provide email & password", 400));
    // }
    // const user = await User.findOne({ email }).select("password");
    // if (!user || !(await user.comparePassword(password, user.Password))) {
    //   return next(new AppError("invalid email or password", 401));
    // }
    // const token = signtoken(user._id);
    // res.status(200).json({
    //   status: "success",
    //   token,
    // });
  }
);
export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
   
  }
);

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = getAuth(req);
    if (!userId) {
      return next(new AppError("User ID is missing or invalid", 400));
    }
    const user = await clerkClient.users.getUser(userId);
    console.log(user);
    return res.json({ user });
  }
);

interface RestrictToRequest extends Request {
  user: typeof User & {
    role: string;
  };
}

export const restrictTo = (...role: string[]) => {
  return (req: RestrictToRequest, res: Response, next: NextFunction) => {
    // if (!role.includes(req.user.role)) {
    //   return next(
    //     new AppError("You do not have permission to perform this action", 403)
    //   );
    // }
    // next();
  };
};
