import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import cd from '../images/720card.png';
import cd1 from '../images/1854card.png';
import cd2 from '../images/1859card.png';




const CardStyle = styled.div`
 .card-slider-container {
    width: 100%;
    margin: 0 auto;
    }

.card {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 250px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;    
    border: 1px solid #e9e9e9;
    margin: 16px;
    padding: 16px;
}
.card div {
  
  margin-left:30px;
  width : 25%;
  height: 100%;
  display : flex;
  align-items: center;
  justify-content: center;
}
.card div:hover {
  width : 35%;
}

    .card-content {
    font-size: 24px;
    }

    .card-content1 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd});
    }
    .card-content2 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd1});
    }
    .card-content3 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd2});
    }
`;


const Card = ({ content }) => (
//   <div className="card">
//     <div className="card-content">{content}</div>
//     <div className="card-content">{content}</div>
//   </div>

    content === 'Card 1' ? 

      <div className="card">
        <div className="card-content1" ></div>
         <div className="card-content2">{"카드2"}</div>
         <div className="card-content3">{"카드3"}</div>
         {/* <div className="card-content4">{"카드4"}</div> */}
       </div> 
       : 
        <div className="card">
            <div className="card-content">{4}</div>
             <div className="card-content">{5}</div>
             <div className="card-content">{6}</div>
           </div>
           


);

const CardSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cardsData = [
    { id: 1, content: 'Card 1' },
    { id: 2, content: 'Card 2' },
   
  ];

  return (
    <CardStyle>
    <div className="card-slider-container">
      <Slider {...settings}>
        {cardsData.map((card) => (
          <Card key={card.id} content={card.content} />
        ))}
      </Slider>
    </div>
    </CardStyle>
  );
};

export default CardSlider;
