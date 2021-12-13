import React from "react";

const CategoryList = ({categories}) => {
    return categories.map((category,i) =>{
        return(
            <li>{category.namaKategori}</li>
        )

    })
}

export default CategoryList;