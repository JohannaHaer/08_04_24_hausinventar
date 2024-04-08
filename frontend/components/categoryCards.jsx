import { Link } from 'react-router-dom'

const CategoryCards = () =>{
const categories = [
  {"name": 'Big Stuff', "imageUrl": "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg", "path": "big-stuff"},
  {"name": 'Not so big stuff', "imageUrl": "https://images.pexels.com/photos/3965512/pexels-photo-3965512.jpeg", "path":"not-so-big-stuff"},
  {"name": 'Small stuff', "imageUrl": "https://images.unsplash.com/photo-1623244307563-f9ade3df13c0?q=80&w=1887&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "path": "small-stuff"}
   ]

    return(
<div className="flex justify-center items-center gap-5 pt-40 flex-wrap">   
  {categories.map((category) => {
    return(
<Link to={`/furniture/${category.path}`} key={category.className} >
  <div className="card w-96 h-96 bg-base-100 shadow-xl">
  <figure><img src={category.imageUrl} alt={category.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{category.name}</h2>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</Link>
    )
  })}
    </div>
    )
}

export default CategoryCards