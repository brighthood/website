import User from "./../model/userModel";
import { catchAsync } from "./../utils/catchAsync";
import { Request, Response, NextFunction } from "express";

export const getalluser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      users,
    });
  }
);

export const getuser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
export const createuser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
export const updateuser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
export const deleteuser = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "success",
    message: "hello from the logout route",
  });
};
