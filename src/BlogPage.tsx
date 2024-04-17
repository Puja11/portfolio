import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
function BlogPage() {
 
  type innerObject = {
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body":string
    }
  
  type rawDataType = [
    innerObject
  ]

  type indexingType = {
    "startIndex": number,
    "lastIndex": number
  }
  //let dataToLoad : any;
  const [indexing,changeIndex] = useState<indexingType >({"startIndex": 0,"lastIndex": 50});
  const [initialBlogData,changeBlogData] = useState<null|rawDataType >(null);
  const [dataToLoad,changeDataToLoad] = useState<any >(null);
  function loadData(startIndex:number,endIndex:number){
    //let dataToLoad : rawDataType[] = [];
    changeDataToLoad(initialBlogData?.slice(startIndex, endIndex));

   }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(
      (res)=>{
        return res.json();
      })
      .then((data)=>{
        changeBlogData(data);
      });
      
 },[]);

 function updateIndex(newStartIndex:number,newLastIndex:number){
  changeIndex(()=>{
    return {"startIndex":newStartIndex,"lastIndex":newLastIndex}
  });
 }

 useEffect(()=>{
  loadData(indexing.startIndex,indexing.lastIndex);
 },[initialBlogData,indexing.startIndex,indexing.lastIndex]);

 
  return (
    <div className="App">
      <header className='App-header'>Blog Posts</header>
      <div className="flex-container">
        {
          dataToLoad && dataToLoad.map((blog:innerObject,index:number) => {
            return <Blog key={blog.id} userId={blog.id} title={blog.email} body={blog.body}/>
          })
        }
      </div>       
      {initialBlogData && <Pagination onHandleClick={updateIndex} lengthOfPage={initialBlogData.length/52} />}
    </div>
  );
}

export default BlogPage;
