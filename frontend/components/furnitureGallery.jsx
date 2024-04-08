import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'

const FurnitureGallery = () =>{
const formRef = useRef();
const navigate = useNavigate()

const { id } = useParams();
const [furnitures, setFurnitures] = useState([])
const [activeCategory, setActiveCategory] = useState();

useEffect(() => {
    fetch(`http://localhost:3000/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setFurnitures(json);
        console.log(json)
      });
  }, [id]);

const handleChange = (e) => {
    setActiveCategory(e.target.value)
}

const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = new FormData(formRef.current)
    fetch('http://localhost:3000', {method: "POST", body: formData})
    if (id == activeCategory){
        navigate(0)
    } else {
    navigate(`/furniture/${activeCategory}`)
    }
    formRef.current.reset()
    document.getElementById('furniture_modal').close()
    setFurnitures(furnitures)
}

    return(
        <>
        <div>
        <button className="btn" onClick={()=>document.getElementById('furniture_modal').showModal()}>Add new furniture</button>
<dialog id="furniture_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <form onSubmit={handleSubmit} ref={formRef}>
    <h3 className="font-bold text-lg p-2">Add furniture</h3>
<div className='flex flex-col gap-3'>
    <label className="input input-bordered flex items-center gap-2">
  Title
  <input type="text" className="grow" placeholder="Name" name="title" />
</label>
<label className="input input-bordered flex items-center gap-2">
  Description
  <input type="text" className="grow" placeholder="Description" name='description' />
</label>
<label className="input input-bordered flex items-center gap-2">
  Room
  <input type="text" className="grow" placeholder="Room" name='room' />
</label>
<label className="input input-bordered flex items-center gap-2">
  Image URL
  <input type="text" className="grow" placeholder="Image URL" name='image' />
</label>
<select className="select select-bordered w-full" name='category' onChange={handleChange}>
    <option selected disabled>Choose a category</option>
  <option value="big-stuff">Big stuff</option>
  <option value="not-so-big-stuff">Not so big stuff</option>
  <option value="small-stuff">small stuff</option>
</select>
<button className='btn btn-primary'>Submit</button>
</div>
</form>
  </div>
</dialog>
</div>

<div className="flex justify-center items-center gap-5 pt-40 flex-wrap">   
  {furnitures.map((furniture) => {
    return(
  <div className="card w-96 h-96 bg-base-100 shadow-xl" key={furniture._id}>
  <figure><img src={`${furniture.image}`}/></figure>
  <div className="card-body">
    <h2 className="card-title">{furniture.title}</h2>
    <p>{furniture.description}</p>
    <div className="card-actions justify-end">
    <Link to={`/furniture/${furniture._id}`}>
    <button className="btn btn-primary">Details</button>
    </Link>
    </div>
  </div>
</div>

    )
  })}
    </div>
    </>
    )
}

export default FurnitureGallery