
function Card() {


    const cards = [
        {
            name:"electronics",
            img:"https://m.media-amazon.com/images/I/81hbmwvrDiL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        },
                {
            name:"shirt",
            img:"https://m.media-amazon.com/images/I/71nnPZ6cdUL._AC_SX569_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        },
                {
            name:"laptop",
            img:"https://m.media-amazon.com/images/I/71HjjQFkzML._AC_SL1280_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        }
        ,
                {
            name:"furniture",
            img:"https://m.media-amazon.com/images/I/61GLN24KsvL._AC_SL1000_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        } 
        ,
                {
            name:"phones",
            img:"https://m.media-amazon.com/images/I/61K3Y0MZMpL._AC_SL1500_.jpg",
            info:"tv televisions air conditioners washing machines audio & theaters office electronics"
        } 
        ,
                {
            name:"whieght",
            img:"https://m.media-amazon.com/images/I/617LH20BD5L._SL1472_.jpg",
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
              <div className="flex align-center justify-center flex-wrap mt-5 border p-3">
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

      <div className="">
        <div className="flex flex-wrap p-3 m-5 items-center justify-around border bg-amber-50">
          <div>
            <h1 className="font-bold py-5">
              Bose Bluetooth woreless headphones
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              tempora totam ipsam hic non! Ut, unde.
            </p>
          </div>
          <div>
            <p className="text-4xl line-through">300$</p>
            <p className="text-green-600 text-4xl">150$</p>
            <button className="bg-yellow-500 h-10 w-30 mt-3 rounded">
              buy know
            </button>
          </div>
          <img
            className="lg:w-100 w-50 py-9"
            src="https://m.media-amazon.com/images/I/31WcMiritWL._AC_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Card