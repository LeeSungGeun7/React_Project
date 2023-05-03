import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';



const CardStyle = styled.div`
 .card-slider-container {
    width: 100%;
    margin: 0 auto;
    }

.card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;    
    border: 1px solid #e9e9e9;
    margin: 16px;
    padding: 16px;
}

    .card-content {
    font-size: 24px;
    }

`;


const Card = ({ content }) => (
//   <div className="card">
//     <div className="card-content">{content}</div>
//     <div className="card-content">{content}</div>
//   </div>
    content === 'Card 1' ? <div className="card">
        <div className="card-content">{content}</div>
         <div className="card-content">{content}</div>
       </div> 
       : 
        <div className="card">
            <div className="card-content">{content}</div>
             <div className="card-content">{content}</div>
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
    { id: 3, content: 'Card 3' },
    { id: 4, content: 'Card 4' },
    { id: 5, content: 'Card 5' },
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
