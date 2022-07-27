import Detail from "../../components/user/Detail"
import HeadCustom from "../../components/layout/HeadCustom"

export async function getStaticProps() 
{
  const response = await fetch('https://testapireact-af87a-default-rtdb.firebaseio.com/form.json')
  const users = await response.json()

  return { props: { users } };
}

const DetailPage = ({ users }) => {

  return (
    <>
      <HeadCustom title="Detail page">
        <meta name="og:title" value="Title de google detail page" />
      </HeadCustom>
      <Detail users={users}/>
    </>
  )
}

export default DetailPage