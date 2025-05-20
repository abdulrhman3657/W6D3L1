
function Card() {


    const cards = [
        {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        },
                {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        },
                {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        }
        ,
                {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        } 
        ,
                {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        } 
        ,
                {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        }         
    ];

  return (
    <div className="">
      <div className="flex flex-col p-3 align-center justify-center">
        <h3 className="font-bold  p-3 my-5">top categories of the month</h3>
        <hr className="text-center" />
      </div>

      <div className="flex align-center justify-center">
        <div className="lg:grid grid-cols-3 gap-5 p-5">
          {cards.map((item) => {
            return (
              <div className="flex flex-wrap mt-5 border p-3">
                <img className=" w-60 h-60" src={item.img} alt="" />
                <div className="p-4">
                  <h1 className="text-4xl mb-4">{item.name}</h1>
                  <p className="w-40">{item.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


          <div className="flex flex-wrap p-3 m-5 items-center justify-around bg-amber-200">
            <div>
              <h1 className="font-bold py-5">Bose Bluetooth woreless headphones</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                tempora totam ipsam hic non! Ut, unde.
              </p>
            </div>
            <img
              className="lg:w-100 w-50 py-9"
              src="https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg"
            />
          </div>
        </div>

  );
}

export default Card