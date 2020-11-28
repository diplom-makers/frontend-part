import * as yup from 'yup'

import { REQUIRED_FIELD, PASSWORDS_MUST_MUTCH } from 'constants/errors'

function equalTo(ref, msg) {
  return yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref)
    },
  })
}

yup.addMethod(yup.string, 'equalTo', equalTo)

export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email().required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
  passwordConfirmation: yup
    .string()
    .equalTo(yup.ref('password'), PASSWORDS_MUST_MUTCH)
    .required(REQUIRED_FIELD),
})

export const signInValidationSchema = yup.object().shape({
  email: yup.string().required(REQUIRED_FIELD),
  password: yup.string().required(REQUIRED_FIELD),
})
