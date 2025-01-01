import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_MODAL } from '../reducer';

export default function OpenModalButton() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };
  return <button onClick={openModal}>모달 열기</button>;
}
