import React from 'react'
import { Trash2 } from 'react-feather';
import { accessSingleVideoApi, deleteCategoryApi, updateCategoryApi } from '../Services/allApi';
import './styles/CategoryCard.css'




function CategoryCard({categoryObj, getCategory, categoryList}) {

  const {id, CategoryName, videos} = categoryObj;

  const deleteCategory = async() => {
    const response = await deleteCategoryApi(id);
    if(response.status>=200 || response.status<300){
      // alert("category removed");
      getCategory();
    }
    else{
      alert("category removing failed")
    }
  }


  const draggingOver = (e,id) => {
    e.preventDefault();
  }


  const droppingCard = async(e, id) => {
    const categoryId = id;
    const videoId = e.dataTransfer.getData("cardId");

    const categoryObj = categoryList.find(obj => obj.id === categoryId)

    const {data} = await accessSingleVideoApi(videoId);

    categoryObj.videos.push(data);

    const response = await updateCategoryApi(categoryId, categoryObj);
    
    if(response.status>=200 || response.status<300){
      getCategory();
    }
  }





  return (
    <>
      <div droppable onDragOver={(e)=>{draggingOver(e,id)}} onDrop={(e)=>droppingCard(e,id)} className='category-video mt-4 py-5' style={{backgroundColor:'rgba(196, 98, 220, 0.2)', cursor:"pointer"}}>
        <div className='content-container d-flex flex-column'>
          <div className='text-white'>
            {CategoryName}
          </div>
          <div className='small-img-container d-flex mt-1 column-gap-2'>
            {
              videos?.map(videoObj => <div className="small-img">
              <img src={videoObj?.coverImg} alt="" />
            </div> )
              
            }
          </div>
        </div>
        <div className='category-delete-btn'>
          <Trash2 size={20} strokeWidth={1.5} className='delete-icon' onClick={deleteCategory} ></Trash2>
        </div>
      </div>
    </>
  )
}

export default CategoryCard
