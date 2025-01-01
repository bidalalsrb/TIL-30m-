import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_MODAL } from '../../reducer';
import { ModalWrapper } from './Modal.style';

export default function Modal() {
  const isShow = useSelector((state) => state.modal.isShow);
  const dispatch = useDispatch();
  if (!isShow) return null;
  const closeModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };
  return (
    <ModalWrapper>
      <div className="container"></div>
      <div className="header">
        <h1>제목</h1>
        <button onClick={closeModal}>닫기</button>
      </div>
      <p>내용</p>
    </ModalWrapper>
  );
}
