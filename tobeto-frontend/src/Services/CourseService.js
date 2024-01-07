
const educationData = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/200/200",
      teacher: "John Doe",
      duration: "10:22",
      subject: "Matematik Temelleri",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/200/200",
      teacher: "Gürkan ilişen",
      duration: "8:15",
      subject: "Fizik İlkeleri",
    },
    {
      id: 4,
      image: "https://picsum.photos/id/239/200/200",
      teacher: "Jane Doe",
      duration: "8:15",
      subject: "Fizik İlkeleri",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/61/200/200",
      teacher: "Jane Doe",
      duration: "8:15",
      subject: "Fizik İlkeleri",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/231/200/200",
      teacher: "Jane Doe",
      duration: "8:15",
      subject: "Fizik İlkeleri",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/232/200/200",
      teacher: "Jane Doe",
      duration: "8:15",
      subject: "Fizik İlkeleri",
    },
  ];
  export const getEducationData = () => {
    return Promise.resolve(educationData);
  };