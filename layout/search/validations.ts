import { validationsMessages } from 'constants/messages'
import * as yup from 'yup'

export const searchSchemaValidation = yup.object({
  city: yup.string().required(validationsMessages.required)
})
