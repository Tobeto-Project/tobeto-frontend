const users = [
  {
    name: "Hasan Can Midi",
    email: "hasancanmidi@hotmail.com",
    password: "1234"
  },
  {
    name: "Test Kullanıcı",
    email: "test",
    password: "test"
  }
];
  export const validateUser = ( email, password) => {
    const user = users.find(u => u.email === email);
    if (!user) {
      return { isValid: false, message: "Yanlış e-posta adresi." };
    } else if (user.password !== password) {
      return { isValid: false, message: "Yanlış şifre." };
    }
    return { isValid: true, message: "Başarılı giriş.",user };
  };