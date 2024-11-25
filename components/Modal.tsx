import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  containerData: { name: string; alarmType: string } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, containerData }) => {
  if (!isOpen || !containerData) return null;

  return (
    <>
      {/* Bootstrap Modal */}
      <div className="modal show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className={`modal-header ${
                containerData.alarmType === 'green'
                  ? 'bg-success text-white'
                  : containerData.alarmType === 'yellow'
                  ? 'bg-warning text-dark'
                  : 'bg-danger text-white'
              }`}
            >
              <h5 className="modal-title">Alarm Details</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Container:</strong> {containerData.name}
              </p>
              <p>
                <strong>Alarm Level:</strong>{' '}
                <span
                  className={`fw-bold ${
                    containerData.alarmType === 'green'
                      ? 'text-success'
                      : containerData.alarmType === 'yellow'
                      ? 'text-warning'
                      : 'text-danger'
                  }`}
                >
                  {containerData.alarmType === 'green'
                    ? 'Normal'
                    : containerData.alarmType === 'yellow'
                    ? 'Warning'
                    : 'Critical'}
                </span>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
