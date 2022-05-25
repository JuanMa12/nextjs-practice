import Detail from "../../components/user/Detail"
import HeadCustom from "../../components/layout/HeadCustom"

const DetailPage = () => {
  return (
    <>
      <HeadCustom title="Detail page">
        <meta name="og:title" value="Title de google detail page" />
      </HeadCustom>
      <Detail />
    </>
  )
}

export default DetailPage