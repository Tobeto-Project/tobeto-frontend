const educationData = [
    {
        id: "1",
        EducationImage: "https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg",
        EducationTitle: "Dr. Ecmel Ayral'dan Hoşgeldin Mesajı",
        EducationDate: "21 Eylül 2023",
        EducationBroadcastTime: "15.20"
      },
      {
        id: "2",
        EducationImage: "https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg",
        EducationTitle: "Eğitimlere Nasıl Katılırım?",
        EducationDate: "8 Eylül 2023",
        EducationBroadcastTime: "17:06"
      },
      {
        id: "3",
        EducationImage: "https://tobeto.s3.cloud.ngn.com.tr/CFE_20235_87c666a723.jpg",
        EducationTitle: "Herkes İçin Kodlama - 2A",
        EducationDate: "2 Ekim 2023",
        EducationBroadcastTime: "03:00"
      },
      {
        id: "4",
        EducationImage: "https://tobeto.s3.cloud.ngn.com.tr/CFE_232_7a27b4deb3.jpg",
        EducationTitle: "Hoşgeldin Buluşması - 2",
        EducationDate: "2 Ekim 2023",
        EducationBroadcastTime: "03:00"
      },
]

export const getEducationData = () => {
    return Promise.resolve(educationData);
}