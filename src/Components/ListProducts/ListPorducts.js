import {Table} from "react-bootstrap";

const ListProducts= ({selectproducts})  => {
    
    return ( 
        <>
        <Table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {selectproducts?.length>0 && selectproducts.map((selectprod) => 
                <tr key={selectprod.id}>
                <td>{selectprod.name}</td>
                <td>{selectprod.descripcion}</td>
                <td>{selectprod.precio}</td>
                <td>{selectprod.cantidad}</td>
                </tr>
                )}        
            </tbody>
        </Table>            
        </>
     );
}
 
export default ListProducts;