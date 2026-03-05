import { FaRegUser, FaSearch, FaShoppingCart } from "react-icons/fa"
import { useState } from "react"
import CartCountBadge from "./CartCountBadge"
import CategoryCard from "./CategoryCard"

const data = [
  {
    id: 1,
    name: "Fresh Fruits",
    count: "12 Products",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
  },
  {
    id: 2,
    name: "Vegetables",
    count: "18 Products",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },
  {
    id: 3,
    name: "Dairy Products",
    count: "8 Products",
    img: "image-url",
  },
  {
    id: 4,
    name: "Bakery",
    count: "10 Products",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    id: 5,
    name: "Meat & Fish",
    count: "6 Products",
    img: "image-url",
  },
]

const Navbar = ({ setShowCart }: any) => {

const [search, setSearch] = useState("")

const filteredCategory = data.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
)

return (
<div className="sticky top-0 bg-white z-10">

<div className="pl-14 hidden lg:block">

<div className="flex justify-between items-center p-8">

<h1 className="text-4xl font-medium">Logo</h1>

<div className="relative w-full max-w-[500px]">

<input
className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
type="text"
placeholder="Search Product..."
value={search}
onChange={(e)=> setSearch(e.target.value)}
/>

<FaSearch
className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
size={20}
/>

</div>

<div className="flex justify-between gap-6">

<div className="flex gap-4">
<div className="icon__wrapper">
<FaRegUser />
</div>
</div>

<div className="flex gap-2">
<div
className="icon__wrapper relative cursor-pointer"
onClick={()=> setShowCart(true)}
>
<FaShoppingCart />
<CartCountBadge size="w-[25px] h-[25px]" />
</div>
</div>

</div>

</div>

</div>

{/* SEARCH RESULT */}

{search && (

<div className="grid grid-cols-3 gap-6 p-8">

{filteredCategory.length > 0 ? (

filteredCategory.map((item)=>(
<CategoryCard
key={item.id}
name={item.name}
count={item.count}
img={item.img}
/>
))

) : (

<p>No category found</p>

)}

</div>

)}

</div>
)
}

export default Navbar