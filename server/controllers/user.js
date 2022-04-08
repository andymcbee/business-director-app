export const signup = async (res, req) => {
  try {
    console.log(req);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({ Message: "Received" });
};
