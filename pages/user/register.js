import Register from "../../components/user/Register"
import HeadCustom from "../../components/layout/HeadCustom"

const RegisterPage = () => {
  return (
    <>
      <HeadCustom title="Register page">
        <meta name="og:title" value="Title de google register page" />
      </HeadCustom>
      <Register />
    </>
  )
}

export default RegisterPage