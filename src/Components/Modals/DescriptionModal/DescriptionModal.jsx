import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TiMediaRecordOutline } from "react-icons/ti";

function DescriptionModal(props) {
  return (
    <Modal
      dir="rtl"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">توضیحات</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> نحوه استفاده از امکانات سایت</h4>
        <p>
          <TiMediaRecordOutline className="me-2" />
          مختصات مبدا و مقصد شما در سمت راست ، بالای صفحه ، نمایش داده شده است .
        </p>
        <p>
          <TiMediaRecordOutline className="me-2" />
          تا زمانی که مقصد خود را انتخاب نکرده باشید گزینه درخواست برای شما فعال
          نخواهد شد .
        </p>
        <p>
          {" "}
          <TiMediaRecordOutline className="me-2" />
          برای تغییر مبدا نشانگر را گرفته کرده و آن را به مکان دلخواه ببرید .
        </p>
        <p>
          <TiMediaRecordOutline className="me-2" />
          برای تغییر مقضد کافی است مکان مورد نظر خود روی نقشه را لمس یا کلیک
          کنید و بلافاصله مختصات مقصد نیز برای شما نشان داده خواهد شد .
        </p>
        <p className="text-end">عرفان سلوک حقیقی</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="closeButton">
          باشه
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DescriptionModal;
