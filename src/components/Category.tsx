import CategoryCard from "./CategoryCard"

const data =[
    {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/download.png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/images.png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/images (1).png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/images (2).png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/download.png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/download.png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/download.png"
    },
     {
        id:0,
        name: "fruit",
        count : "9 product",
        img: "/download.png"
    }
]




const Category = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((el) =>(
                <CategoryCard
                key={el.id}
                img={el.img}
                name={el.name}
                count={el.count}
                />
            ))}
        </div>
    </div>
  )
}

export default Category