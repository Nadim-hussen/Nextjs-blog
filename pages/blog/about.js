import Head from "next/head"
import Nav from "../../components/Nav"

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <Nav />
            <div className="d-flex justify-content-center align-items-center">
                <h3>This is About Page</h3>
            </div>
        </>

    )
}
export default About;