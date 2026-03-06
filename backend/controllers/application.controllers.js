import Application from "../models/application.model.js";

// @desc    Create new application
// @route   POST /api/applications
// @access  Public
export const createApplication = async (req, res) => {
  try {
    const { fullName, phone, email, course, message } = req.body;

    // Basic validation
    if (!fullName || !phone || !course) {
      return res.status(400).json({
        success: false,
        message: "Full name, phone number, and course are required",
      });
    }

    const application = await Application.create({
      fullName,
      phone,
      email,
      course,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Application error:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
