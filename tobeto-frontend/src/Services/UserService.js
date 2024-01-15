const users = [
  {
    IdentityNumber: "26258522595",
    profilimg: "https://avatars.githubusercontent.com/u/74327275?v=4",
    name: "Hasan Can",
    Lastname : "Midi",
    email: "hasancanmidi@hotmail.com",
    password: "1234",
    AboutMe: "I am crazy man",
    BirthDate: "10.03.1999",
    PhoneNumber: "05389716422"
  },
  {
    profilimg: "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png",
    name: "Test Kullanıcı",
    email: "test",
    password: "test"
  },
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