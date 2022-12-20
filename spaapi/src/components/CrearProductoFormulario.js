import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CrearProductoFormulario({callback}) {
  
    const [titulo, setTitulo]= useState("")
    const [imagen, setImagen]= useState("")
    const [precio, setPrecio]= useState("")
    const [categoria, setCategoria]= useState("")
    const [descripcion, setDescripcion]= useState("")

    const enviarFormulario= (e)=>{
        e.preventDefault()
        callback({titulo, imagen, precio, categoria, descripcion})
    }
  
    return (
    <Form onSubmit={enviarFormulario}>
      {/* Título */}
      <Form.Group className="mb-3" controlId="titulo">
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" placeholder="Ingrese el título" required value={titulo} onChange={e=>setTitulo(e.target.value)} />
      </Form.Group>

      {/* Imagen */}
      <Form.Group className="mb-3" controlId="imagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="url" placeholder="Ingrese URL de la imagen" required value={imagen} onChange={e=>setImagen(e.target.value)} />
      </Form.Group>

      {/* Precio */}
      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="Ingrese el precio" required value={precio} onChange={e=>setPrecio(e.target.value)} />
      </Form.Group>

      {/* Categoría */}
      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
        <Form.Control as="select" type="select" required value={categoria} onChange={e=>setCategoria(e.target.value)} >
            <option value="">Seleccione</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Ropa">Ropa</option>
        </Form.Control>
      </Form.Group>

      {/* Descripción */}
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows="3" placeholder="Ingrese la descripción" required value={descripcion} onChange={e=>setDescripcion(e.target.value)} />
      </Form.Group>

      {/* Botón Crear Producto */}
      <Button variant="primary" type="submit">
        Crear producto
      </Button>
    </Form>
  );
}

export default CrearProductoFormulario;