import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
 
export default function HeaderCarousel(props)
{
    var items = [
        "Using a new library.",
        "Watching some shows.",
        "Coding a personal project.",
        "Gaming!",
        "Debugging...",
        "Messaging friends <3",
        "Building a project with friends!",
        "Editting my photos.",
        "Reading the documentation.",
        "Sleeping with my eyes open..."
    ]
 
    return (
        <Carousel autoplay={true} indicators={false} interval={3000} timeout={250} navButtonsAlwaysInvisible={true}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{
    return (
        <Paper elevation={0}>
            <p>{props.item}</p>
        </Paper>
    )
}