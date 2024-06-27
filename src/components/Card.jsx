import React from 'react'

const Card = () => {
 
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
        <figure>
          <img src="{img}" alt="{title}" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap justify-center space-x-4 space-y-4">
  <div className="card card-compact w-full sm:w-60 bg-base-100 shadow-xl">
    <figure>
      <img src="https://food-cms.grab.com/compressed_webp/items/THITE2023050315204897650/detail/menueditor_item_eaad8600b59b4f1eb8ff0d7ff1602074_1683127223272980042.webp" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">ข้าวไข่ข้น</h2>
      <p>อาหารตามสั่ง</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">65</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-full sm:w-60 bg-base-100 shadow-xl">
    <figure>
      <img src="https://food-cms.grab.com/compressed_webp/items/THITE2023050315195455329/detail/menueditor_item_1eae18317fd348229770c06fe21c86bb_1683127150652086925.webp" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">ข้าวยำไข่ดาว</h2>
      <p>อาหารตามสั่ง</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">75</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-full sm:w-60 bg-base-100 shadow-xl">
    <figure>
      <img src="https://food-cms.grab.com/compressed_webp/items/THITE2023050315181214166/detail/menueditor_item_5d857bc7c8db45d392cf53dca8bd376b_1683127029720039696.webp" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">จ้าวไข่ข้นประกระป๋อง</h2>
      <p>อาหารตามสั่ง</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">85</button>
      </div>
    </div>
  </div>
<div className="card card-compact w-full sm:w-60 bg-base-100 shadow-xl">
    <figure>
      <img src="https://food-cms.grab.com/compressed_webp/items/THITE2023050315163680050/detail/menueditor_item_0ee9acd64be6435b8c35e96e75270a5b_1683126837176090546.webp" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">ข้าวกระเพราหมูสัพไข่ข้น</h2>
      <p>อาหารตามสั่ง</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">105</button>
      </div>
    </div>
  </div>
  <div className="card card-compact w-full sm:w-60 bg-base-100 shadow-xl">
    <figure>
      <img src="https://food-cms.grab.com/compressed_webp/items/THITE2023050315103232557/detail/menueditor_item_efd6db22fb974433853b349cca9a3f5a_1683126558486704008.webp" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">ข้าวไข่ข้นปูอัด</h2>
      <p>อาหารตามสั่ง</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">65</button>
      </div>
    </div>
  </div>

</div> */}
    </div>
  );
}

export default Card