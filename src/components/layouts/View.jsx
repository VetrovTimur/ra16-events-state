import './view.css';

export const View = (props) => {
  const {products, icon} = props;


  if(icon ==='view_list') {
    return (
      <>
        <div className="container-listView">
         {products.map((product, index) => (
          <div key={index} className='box-listView'>
            <img className="img-listView" key={index} src={product.img} alt=""></img>
            <h1 className="name-listView">{product.name}</h1>
            <p className="color-listView">{product.color}</p>
            <p className="price-listView">${product.price}</p>
            <button className="btn-listView">
                <strong>Купить</strong>
            </button>
          </div>
         ))}
        </div>
      </>
    )
  } else if(icon ==='view_cards') {
    return (
      <>
        {products.map((product, index) => (
          <div key={index} className='box-cardsView'>
            <h1 className="name-cardsView">{product.name}</h1>
            <p className="color-cardsView">{product.color}</p>
            <img className="img-cardsView" key={index} src={product.img} alt=""></img>
            <p className="price-cardsView">${product.price}</p>
            <button className="btn-cardsView">
                <strong>Купить</strong>
            </button>
          </div>
         ))}
      </>
    )
  } else {
    <div>
      View
    </div>
  }

}
