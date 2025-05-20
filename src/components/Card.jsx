
function Card() {


    const cards = [
        {
            name:"name1",
            img:"https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            info:"wdqwdqw"
        }       
    ];

  return (
    <div className="bg-gray-200">
      {cards.map((item) => {
        return (
          <div>
            <img className="bg-red-300 w-60 h-80" src={item.img} alt="" />
            <h2>{item.name}</h2>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Card