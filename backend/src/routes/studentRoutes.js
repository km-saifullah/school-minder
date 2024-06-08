import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
} from "../controllers/studentController.js";

const router = Router();

router.route("/").get(getAllStudents).post(createStudent);
router
  .route("/:id")
  .get(getSingleStudent)
  .patch(updateStudent)
  .delete(deleteStudent);

export default router;
