import User from "../../components/user/User"
import HeadCustom from "../../components/layout/HeadCustom"

const ViewDetailPage = ({ user, id }) => {
  return (
    <>
      <HeadCustom title="View detail page">
        <meta name="og:title" value="Title de google view detail page" />
      </HeadCustom>
      <User user={user} id={id} />
    </>
  )
}

ViewDetailPage.getInitialProps = async (ctx) =>
{
  //console.log(ctx.query.id);
  const response = await fetch('https://testapireact-af87a-default-rtdb.firebaseio.com/form/'+ ctx.query.id +'.json')
  const resJson = await response.json()

  //console.log(resJson)

  return { user: resJson, id : ctx.query.id }
}

export default ViewDetailPage