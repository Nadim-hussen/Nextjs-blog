import Nav from "../../components/Nav";


export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map((curElm)=>{
        return{
            params:{
                pageno:curElm.id.toString(),
            }
        }
    })
    return {
        paths,
        fallback:false
    }
}


export const getStaticProps= async(context)=>{
    const id = context.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
    return{
        props:{
            data,
        }
    }
}

const myData = ({data})=>{
    const {id,body,title}= data;
    return(<>
    
    <Nav />
    <div className="d-flex justify-content-center align-items-center flex-column">
        <h2>{id}</h2>
        <h3 className="text-capitalize">{title}</h3>
        <h3 className="ms-2 text-capitalize">{body}</h3>
    </div>
    </>)
}

export default myData;