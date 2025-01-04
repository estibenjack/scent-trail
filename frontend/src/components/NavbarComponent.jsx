import { useState } from "react";
import { Navbar, Button, Modal } from "react-bootstrap";
import PerfumeForm from "./PerfumeForm";

const NavbarComponent = ({ onPerfumeAdded }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <header className="header">
      <Navbar
        bg="dark"
        variant="dark"
        className="d-flex align-items-center py-3"
      >
        <Navbar.Brand className="mx-auto">Scent Trail</Navbar.Brand>
        <Button
          variant="outline-light"
          onClick={handleShow}
          style={{ marginRight: "30px" }}
        >
          Add New Perfume
        </Button>
      </Navbar>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Perfume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PerfumeForm
            onSubmit={(perfume) => {
              console.log("Perfume added: ", perfume);
              onPerfumeAdded(perfume);
              handleClose();
            }}
          />
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default NavbarComponent;
