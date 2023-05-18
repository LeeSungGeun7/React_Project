import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import cd from '../images/카드1.png';
import cd1 from '../images/카드2.png';
import cd2 from '../images/카드3.png';
import cd3 from '../images/카드4.png';
import cd4 from '../images/카드5.png';
import cd5 from '../images/카드6.png';
import cd6 from '../images/카드7.png';
import cd7 from '../images/카드8.png';

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
    background-color: white;
    /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
    border-radius: 4px;    
    /* border: 1px solid #e9e9e9; */
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
    .card-content4 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd3});
    }
    .card-content5 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd4});
    }
    .card-content6 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd5});
    }
    .card-content7 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd6});
    }
    .card-content8 {
      background-size: contain;
      background-repeat: no-repeat;
      background-image : url(${cd7});
    }
`;

const Card = ({ content }) => (

    content === 'Card 1' ? 

      <div className="card">
        <div className="card-content1" ></div>
         <div className="card-content2">{""}</div>
         <div className="card-content3">{""}</div>
         <div className="card-content4">{""}</div>
       </div> 
       : 
        <div className="card">
            <div className="card-content5">{""}</div>
             <div className="card-content6">{""}</div>
             <div className="card-content7">{""}</div>
             <div className="card-content8">{""}</div>
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
    // { id: 3, content: 'Card 3' },
    // { id: 4, content: 'Card 4' },
    // { id: 5, content: 'Card 5' },
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
