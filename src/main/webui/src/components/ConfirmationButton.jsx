import {
	Button
} from '@patternfly/react-core';
import {
	Modal,
	ModalVariant
} from '@patternfly/react-core/deprecated';

export const ConfirmationButton = ({ btnVariant, onConfirm, children, message, icon }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClick = () => {
    setIsOpen(true);
  };

  const onCloseConfirmation = () => {
    setIsOpen(false);
  };

  return <>
    <Button icon={icon} variant={btnVariant} onClick={() => onClick()}>{children}</Button>
    <Modal variant={ModalVariant.small} title="Are you sure?" isOpen={isOpen}
      onClose={onCloseConfirmation}
      actions={[<Button key="confirm" variant={btnVariant} onClick={onConfirm}>{children}</Button>,
      <Button key="close" variant="link" onClick={onCloseConfirmation}>Close</Button>]}
    >
      {message}
    </Modal>
  </>
}