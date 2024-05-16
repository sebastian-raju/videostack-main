import { BASE_URL } from "./baseUrl";
import { commonRequest } from "./commonStructure";



// get api

export const accessVideoApi = async () =>{
  return await commonRequest('GET', `${BASE_URL}/videos`, {});
}

export const accessSingleVideoApi = async (id) => {
  return await commonRequest('GET', `${BASE_URL}/videos/${id}`, {});
}

export const accessCategoryApi = async() => {
  return await commonRequest('GET', `${BASE_URL}/categories`, {});
}

export const accessHistoryApi = async () => {
  return commonRequest("GET", `${BASE_URL}/histories`, {});
}



// post api
export const addVideoApi = async (data) => {
  return await commonRequest("POST", `${BASE_URL}/videos`, data);
}

export const addCategoryApi = async (data) => {
  return await commonRequest('POST', `${BASE_URL}/categories`, data);
}

export const addHistoryApi = async (data) => {
  return await commonRequest("POST",`${BASE_URL}/Histories`, data);
}


// Put api

export const updateCategoryApi = async(id, data) => {
  return await commonRequest('PUT',`${BASE_URL}/categories/${id}`, data);
}



// delete api
export const deleteCategoryApi = async(id) => {
  return await commonRequest("DELETE",`${BASE_URL}/categories/${id}`, {});
}


export const deleteVideoApi = async (id) => {
  return await commonRequest("DELETE",`${BASE_URL}/videos/${id}`, {});
} 

export const deleteHistoryApi = async (id) => {
  return await commonRequest("DELETE", `${BASE_URL}/histories/${id}`);
}




















