// RequestNumberModal;
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./RequestNumberModal.css";

function RequestNumberModal(props) {
  return (
    <Modal
      dir="rtl"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          شماره درخواست شما
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-around" dir="rtl">
        <h4>
          {props.requestNumber ? props.requestNumber : "لطفا منتظر بمانید ..."}
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="closeButton">
          باشه
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestNumberModal;
