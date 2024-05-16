import React, { useEffect } from 'react'
import './styles/Categories.css'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { accessCategoryApi, addCategoryApi } from '../Services/allApi';
import CategoryCard from './CategoryCard';
import {  Zoom, toast } from 'react-toastify';


function Categories() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryList, setCategoryList] = useState([]);

  const[categoryData, setCategoryData] = useState({ CategoryName:"", videos:[]});
  


  const getCategory = async() => {
    const {data} = await accessCategoryApi();
    setCategoryList(data);
  }

  const getCategoryData = (e) => {
    const data = e.target.value;
    setCategoryData({...categoryData, CategoryName:data});
  }

  const addCategoryData = async () => {
    const {CategoryName} = categoryData;
    if(CategoryName === ""){
      // alert('please fill the field');
      toast.error('please fill the field', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        });
    }
    else {
      const output = await addCategoryApi(categoryData);
      if(output.status >= 200 || output.status < 300){
        // alert('new category added successfully');
        toast.success('New category added successfully', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });
        handleClose();
        getCategory();
      }
      else {
        // alert('error adding category');
        toast.error('error adding category', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
          });
      }
    }
    

  }



  useEffect(()=> {
    getCategory();
  },[]);


  return (
   <>
      <div className='categories-container d-flex flex-column justify-content-center align-item-center'>
        <button className='category-video' style={{cursor:"pointer"}} onClick={handleShow}>
          Add new Category
        </button>
  
        {
          categoryList.map(categoryObj => <CategoryCard key={categoryObj.id} categoryList={categoryList} getCategory={getCategory} categoryObj ={categoryObj}/>)
        }
  
        <Modal className='' show={show} onHide={handleClose}>
          <div className='p-5 top-modal' ><div className='modal-title text-center'>Add Category</div>
          <input type="text" className=' ps-3 pe-4 mt-3 add-input w-100' name="" onChange={(e)=>{
            getCategoryData(e);
          }} id="" placeholder='Add new Category' />
          </div>
          
          
          <div className='d-flex align-items-center justify-content-center pb-5 bg-black'>
            
  
            <div className='add-video me-3' style={{cursor:"pointer"}} onClick={addCategoryData}>
              Add
            </div>
            <div className='add-video bg-dark' style={{cursor:"pointer"}} onClick={handleClose}>
              close
            </div>
          </div>
        </Modal>
      </div>
   </>
  )
}

export default Categories
