import Response from "../Utils/Response";
import Status from "http-status";
import { model, Model } from "mongoose";

// Save Data In Database
export const create = (Model) => async (req, res, next) => {
  try {
    const data = await Model.create(req.body);
    if (!data) {
      return Response.errorMessage(res, "Fail To Register", Status.BAD_REQUEST);
    }
    return Response.successMessage(res, "Success", data, Status.CREATED);
  } catch (error) {
    console.log(error);
  }
};
// Get All Data
export const getAll = (Model) => async (req, res, next) => {
  try {
    const data = await Model.find().select("-password");
    if (!data) {
      return Response.errorMessage(res, "Fail To Retrieve", Status.BAD_REQUEST);
    }
    return Response.successMessage(res, "Success", data, Status.OK);
  } catch (error) {
    console.log(error);
  }
};
// Get Data By Id

export const getOneById = (model) => async (req, res, next) => {
  try {
    const data = await Model.findById(req.params.id).select("-password");
    if (!data) {
      return Response.errorMessage(res, "Fail To Get Data", Status.BAD_REQUEST);
    }
    return Response.successMessage(res, "Success", data, Status.OK);
  } catch (error) {
    console.log(error);
  }
};
// Update Data By Id

export const updateOneById = (model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");
    if (!data) {
      return Response.errorMessage(res, "Fail To Update", Status.BAD_REQUEST);
    }
    return Response.successMessage(res, "Success", data, Status.OK);
  } catch (error) {
    console.log(error);
  }
};
// delete One By Id datas
export const deleteOneById = (Model) => async (req, res, next) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id).select(
      "-password"
    );
    if (!data) {
      return Response.errorMessage(res, "failed!", Status.BAD_REQUEST);
    }
    return Response.succesMessage(res, "Success", data, Status.OK);
  } catch (error) {
    console.log(error);
  }
};
