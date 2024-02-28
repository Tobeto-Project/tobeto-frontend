
const courseData = [
  {
    id: 1,
    image: "https://picsum.photos/id/237/200/200",
    teacher: "John Doe",
    duration: "10:22",
    subject: "C#",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/238/200/200",
    teacher: "Gürkan İlişen",
    duration: "8:15",
    subject: "Profesyonel Gelişim Eğitimleri",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/239/200/200",
    teacher: "Jane Doe",
    duration: "6:45",
    subject: "Çeşitlilik ve Kapsayıcılık",
  },
    {
    id: 3,
    image: "https://picsum.photos/id/239/200/200",
    teacher: "Jane Doe",
    duration: "6:45",
    subject: "Çeşitlilik ve Kapsayıcılık",
  },


];

  export const getCourseData = () => {
    return Promise.resolve(courseData);
  };