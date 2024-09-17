import React from 'react';
import Slider from 'react-slick';

const CustomSlider = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    autoplaySpeed: 3000
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {items.map((item, index) => (
                <div key={index} className='icon-slider'>
                    {item.icon ?
                        <i className={item.icon}></i> : <img src={item.img} alt={item.title} />
                    }
                    <p>{item.title}</p>
                </div>
            ))}
        </Slider>
    );
};

export default CustomSlider;