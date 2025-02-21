import cx from "clsx"
import styles from "./CreateIssue.module.css"
import Button from "../components/Button"
import TextField from "../components/TextField"
import axios from "axios"
import { useRef } from "react"
import { useForm } from "../hooks"
import { GITHUB_API } from "../api"
import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks"

export default function CreateIssue() {
  const inputRef = useRef()
  const textareaRef = useRef()
  const navigate = useNavigate()
  const user = useUser()

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/JinwonShen/github-issue/issues`,
          {
            title: inputValues.title,
            body: inputValues.body,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
              "Content-Type": "application/json",
              Accept: "application/vnd.github.v3+json", // 🔥 GitHub API
            },
          },
        ),
      validate,
      onErrors: () => console.log("error"),
      refs: { title: inputRef, body: textareaRef },
      onSuccess: (result) => {
        console.log(result)
        navigate("/", { replace: true })
      },
    },
  )

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>아바타</div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            type="textarea"
            ref={textareaRef}
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
              disabled={isSubmitting}
            >
              Submit new Issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

function validate(values) {
  let errors = {}
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." }
  }

  return errors
}
