import React, { useEffect } from 'react';
import { SuccessText } from './SuccessMessage.styled';

export const SuccessMessage = ({ message, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [onClose, show]);

  return show ? <SuccessText>{message}</SuccessText> : null;
};
