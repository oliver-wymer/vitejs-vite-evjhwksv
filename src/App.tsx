import React, { useState, useMemo, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "@carbon/react";

interface ModalProps {
  type: string;
  content: React.ReactElement | null;
  open: boolean;
}

export default function App() {
  const [openModal, setOpenModal] = useState<ModalProps | null>(null);

  const handleOpenModal = () => {
    const modalContent = (
      <>
        <ModalHeader
          title="Cancel monitor creation?"
          buttonOnClick={() => setOpenModal(null)} // Close modal when clicked
        />
        <ModalBody aria-label="cancel confirmation">
          <p style={{ marginBottom: '1rem' }}>
            Are you sure you want to cancel creating this monitor? All inputted details will not be saved.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button kind="secondary" onClick={() => setOpenModal(null)}>
            Continue monitor creation
          </Button>
          <Button kind="danger" onClick={clearCreateData}>
            Cancel monitor creation
          </Button>
        </ModalFooter>
      </>
    );

    setOpenModal({
      type: 'confirm',
      content: modalContent,
      open: true,
    });
  };

  const clearCreateData = () => {
    console.log('Form data cleared');
    setOpenModal(null); // Close the modal after clearing data
  };

  return (
    <div>
      <Button onClick={handleOpenModal}>Launch Modal</Button>

      {openModal?.open && (
        <Modal open={openModal.open} onRequestClose={() => setOpenModal(null)}>
          {openModal.content}
        </Modal>
      )}
    </div>
  );
}
