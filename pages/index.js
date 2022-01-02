import Head from "next/head"
import Link from "next/link"
import Nav from "../components/Nav"



export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return {
    props: {
      data,
    }
  }
}


export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Nav />
      <div className="row d-flex justify-content-center align-items-stretch">
        {
          data.map((curElm) => {
            return (
              <div className= "d-flex card col-md-5 m-2" style={{width:"18rem"}} key={curElm.id}>
              
                <div className="card-body">
                  <h5 className="card-title text-capitalize">{curElm.title} &rarr;</h5>
                  {/* <p className="card-text">{curElm.excerpt}</p> */}
                  <Link href={`/blog/${curElm.id}`}><a className= "btn btn-primary w-100 ">Read More...</a></Link>
                </div>
              </div>

            )

          })
        }
      </div>
    </div>
  )
}
