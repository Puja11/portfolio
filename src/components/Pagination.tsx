import '../styles/pagination.css';
import { Link } from "react-router-dom"; 

type propsLength = {
    lengthOfPage:number,
    onHandleClick:(x:number,y:number)=>void
}

function Pagination(props:propsLength){
    console.log("pagination")
    let innerHtmlOfPages = [];
    for(let i=0;i<props.lengthOfPage;i++){
        innerHtmlOfPages.push(<Link to="#" key={i} onClick={()=>props.onHandleClick(i*50,i*50+50)} >{i+1}</Link>)
        //innerHtmlOfPages.push(<Link to="/" key={i}>{i+1}</Link>)
    }
    return (<div className="pagination">
    <Link to="/blogs" >&laquo;</Link>
    {innerHtmlOfPages}
    <Link to="/blogs" >&raquo;</Link>
  </div>
  );
}

export default Pagination;