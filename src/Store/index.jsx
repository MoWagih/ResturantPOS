import { create } from "zustand";

import Cold from '../assets/img/categories/cold.png'
import wok from '../assets/img/categories/wok.png'
import desert from '../assets/img/categories/desert.png'



export const useData = create((set) => (
    {
  data: [
    {  documentId: 1,  name: "pasta", path: "pasta", img: Cold },
    {  documentId: 2,  name: "burgers", path: "burgers", img: wok },
    {  documentId: 3,  name: "pizza", path: "pizza", img: desert },
    {  documentId: 4,  name: "wok", path: "wok", img: Cold },
    {  documentId: 5,  name: "mmm", path: "mmm", img: wok },
    {  documentId: 6,  name: "italy", path: "italy", img: desert },
  ],

  active_cat_id : 0,

  setActiveId: (activeTab)=>(set(()=>({active_cat_id : activeTab }))),
  resetActiveId: ()=>(set(()=>({active_cat_id : 0})))
}
));


