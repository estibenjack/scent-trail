import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const PerfumeForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, brand });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Perfume Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter perfume name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Perfume Brand</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter brand name"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default PerfumeForm;
