import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';

    function RenderMenuItem ({selected, onClick}) {
        return (
            <Card
                onClick={() => onClick(selected.id)}>
                <CardImg width="100%" src={selected.image} alt={selected.name} />
                <CardImgOverlay>
                    <CardTitle>{selected.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem selected={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;