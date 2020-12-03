import React from 'react';
import Carousel from 'react-material-ui-carousel'
 
export default function HeaderCarousel(props)
{
    let items = props.data.map( (item, i) => {return <Item key={i} item={item}/>} );
    
    return (
        <Carousel autoplay={true} indicators={false} interval={3000} timeout={250} navButtonsAlwaysInvisible={true}>
            {items}
        </Carousel>
    );
}
 
function Item(props)
{
    return (
        <p>{props.item}</p>
    )
}