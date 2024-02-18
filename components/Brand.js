import '../pages/ProductListing.css'
import React from 'react'
import { useState } from 'react';

const Brand = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
    console.log(checkedItems);
  };
  return (
    <>
      <div className='Brands'>
              <h3> Brands</h3>
        <label>
              <input
                type="checkbox"
                name= 'All'
                checked={checkedItems.All || false}
                onChange={handleChange}
              />
            All
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'Zara'
                checked={checkedItems.Zara || false}
                onChange={handleChange}
              />
            Zara
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'Levins'
                checked={checkedItems.Levins || false}
                onChange={handleChange}
              />
            Levins
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'Adidas'
                checked={checkedItems.Adidas || false}
                onChange={handleChange}
              />
            Adidas
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'PeterEngland'
                checked={checkedItems.PeterEngland || false}
                onChange={handleChange}
              />
            Peter England
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'AllenSolley'
                checked={checkedItems.AllenSolley || false}
                onChange={handleChange}
              />
            Allen Solley
      </label>
      <br/>
        <label>
              <input
                type="checkbox"
                name= 'Fabindia'
                checked={checkedItems.Fabindia || false}
                onChange={handleChange}
              />
            Fabindia
      </label>
      <br/>

              </div>
    </>
  )
}

export default Brand;



// const BrandsName = [
//     {
//         id:1,
//         name:'All',
//     },
//     {
//         id:1,
//         name:'Zara',
//     },
//     {
//         id:1,
//         name:'Levis',
//     },
//     {
//         id:1,
//         name:'Adidas',
//     },
//     {
//         id:1,
//         name:'Peter England',
//     },
//     {
//         id:1,
//         name:'Allen Solly',
//     },
//     {
//         id:1,
//         name:'Fabindia',
//     },
// ];




              
      

{/* <label>
        <input
          type="checkbox"
          name="checkbox1"
          checked={checkedItems.checkbox1 || false}
          onChange={handleChange}
        />
        All
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox2"
          checked={checkedItems.checkbox2 || false}
          onChange={handleChange}
        />
        Zara
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox3"
          checked={checkedItems.checkbox3 || false}
          onChange={handleChange}
        />
        Levis
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox4"
          checked={checkedItems.checkbox4 || false}
          onChange={handleChange}
        />
        Adidas
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox5"
          checked={checkedItems.checkbox5 || false}
          onChange={handleChange}
        />
        Peter England
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox6"
          checked={checkedItems.checkbox6 || false}
          onChange={handleChange}
        />
       Allen Solley 
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="checkbox7"
          checked={checkedItems.checkbox7 || false}
          onChange={handleChange}
        />
        Fabindia
      </label>
      <br /> */}