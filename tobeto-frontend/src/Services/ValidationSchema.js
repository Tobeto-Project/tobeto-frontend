import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Ad alanı zorunludur'),
  lastName: yup.string().required('Soyad alanı zorunludur'),
  email: yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta alanı zorunludur'),
  phoneNumber: yup.string().length(11, 'Telefon numaranız 11 haneli olmalıdır').required('Telefon numarası zorunludur'),
  password: yup.string().required('Parola alanı zorunludur'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Parolalar eşleşmiyor').required('Parola tekrarı zorunludur'),
});

export default validationSchema;