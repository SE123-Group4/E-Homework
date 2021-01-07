export const isEmail = (email) => {
  var reg = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
  var flag = reg.test(email);
  console.log('is email?', flag);
  return flag;
};
