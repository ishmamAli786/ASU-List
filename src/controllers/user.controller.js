const register = async (req, res) => {
    let body = req.body;
    const user = await adminService.createAdmin(body);
    res.status(httpStatus.CREATED).send(user);
  };
  
  module.exports = {
      register
  };