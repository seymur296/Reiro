import React from "react"
import Categorie from "../components/categories/Categorie"
import Feature from "../components/featured/Feature"
import Ideas from "../components/ideas/Ideas"
import PopularNews from "../components/news/PopularNews"
import Tags from "../components/popular/Tags"
import Posts from "../components/previous/Posts"
import Reiro from "../components/reiro/Reiro"

const Home = () => {
    return(
        <div>
            <Tags/>
            <Ideas/>
            <PopularNews/>
            <Feature/>
            <Posts/>
            <Categorie/>
            <Reiro/>
        </div>
    )
}

export default Home