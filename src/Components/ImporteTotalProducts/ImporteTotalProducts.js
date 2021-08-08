const ImporteTotalProducts = ({products}) => {
    return (
        < >
       <h1>
           {products?.length>0 && 
               <p>El valor de la compra es: $</p>
           }
           {products?.length>0 && products.reduce((accumulator, currentValue) => {
               return accumulator + currentValue.precio * currentValue.cantidad;
             }, 0)
           }
       </h1>
        </>
);
}

export default ImporteTotalProducts;