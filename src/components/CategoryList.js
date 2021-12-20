import React from "react";

const CategoryList = ({categories}) => {
    return categories.map((category,i) =>{
        return(
            <li key={i}>{category.namaKategori}</li>
        )

    })
}

export default CategoryList;