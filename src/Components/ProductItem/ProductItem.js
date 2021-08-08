import {Card, Button, Row, Col} from "react-bootstrap";

/*
            <row col={12}>
                {products.map((product)=> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="Leche.png"/>
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.descripcion} : ${product.precio}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(product)}>Agregar</Button>
                        <text> 0 </text>
                        <Button variant="primary"  onClick={()=>delFromCart(product.id)}>Quitar</Button>
                        </Card.Body>
                    </Card>
                )}
            </row>
*/            
/*
<Row xs={1} md={12} className="g-4">
{Array.from({ length: 4 }).map((_, idx) => (
    {products.map((product)=> 
    <Col>
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    )}            
))}
</Row>
*/
const ProductItem = ({products, addToCart, delFromCart}) => {
    /*holder.js/100px180" />*/
    /*"c:/UTN/shoppingcard/src/images/Leche.png"*/
    return( 
        <div>
   <row col={12}>
                {products.map((product)=> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="Leche.png"/>
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.descripcion} : ${product.precio}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>addToCart(product)}>Agregar</Button>
                        <text> 0 </text>
                        <Button variant="primary"  onClick={()=>delFromCart(product)}>Quitar</Button>
                        </Card.Body>
                    </Card>
                )}
            </row>
        </div>
        )
}

export default ProductItem;