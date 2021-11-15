import * as yup from 'yup'

export const formSchema = yup.object().shape({
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.number().required('Please enter your last name'),
    email: yup.string().required('Please enter your email'),
    subject: yup.string().required('Please enter a subject'),
    phone: yup.string().required('Please enter your phone number'),
    message: yup.string().required('Please enter your message'),
    address: yup.string().required('Please enter your business name'),
    company: yup.string().required('Please enter your street address'),
    country: yup.string().required('Please select your country')
  })