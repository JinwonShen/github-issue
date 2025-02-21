import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { GITHUB_API } from "./api"
import axios from "axios"

export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess, // 성공 하면 ?
  onErrors, // 에러가 나면?
  onSubmit, // 값이 전달될 때에는 어떤 함수를 호출 ?
}) {
  const [inputValues, setInputValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  function onChange(e) {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    setIsSubmitting(true)
    const validateResult = validate(inputValues)
    setErrors(validateResult)

    const errorKeys = Object.keys(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      refs[key].current.focus()

      setIsSubmitting(false)
      return
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit()
        onSuccess(result)
      } catch (e) {
        onErrors()
      }
      return
    }
  }

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  }
}

async function getUserInfo() {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      "Content-TYpe": "application/json",
    },
  })

  return data.data
}

export function useUser() {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
    staleTime: Infinity,
  })
}
