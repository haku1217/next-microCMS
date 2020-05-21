import { NextPage } from 'next'
import fetch from 'node-fetch'
const Index: NextPage = (props: any) => {
  console.log({ props })

  return (
    <>
      {props.hoge.totalCount}
      <div dangerouslySetInnerHTML={{ __html: props.hoge.contents[0].body }} />
      <div>test</div>
    </>
  )
}

export const getServerSideProps = async () => {
  const item = await fetch('https://next-blog.microcms.io/api/v1/post', {
    headers: { 'X-API-KEY': '127aa9de-d581-4d06-adad-add8479d701c' }
  }).then((res) => res.json())
  return { props: { hoge: item } }
}
export default Index
