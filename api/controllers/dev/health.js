const checkHealth = (req, res) => {
  try {
    return res.status(200).json({
      sucess: true,
      message: "Jilitodo is doing fine",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Jilitodo is down",
    });
  }
};

module.exports = checkHealth;
