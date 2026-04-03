import React from 'react';

export default function About() {
  return (
    <div className="card about-view">
      <div className="card-header" style={{ textAlign: 'center', fontSize: '1.25rem', borderBottom: 'none' }}>
        Thông Tin Sinh Viên
      </div>
      <div className="info-row">
        <span className="info-label">Họ và tên</span>
        <span className="info-value">Lê Văn Trí</span>
      </div>
      <div className="info-row">
        <span className="info-label">Mã sinh viên</span>
        <span className="info-value">2251220201</span>
      </div>
      <div className="info-row">
        <span className="info-label">Lớp</span>
        <span className="info-value">22CT1</span>
      </div>
    </div>
  );
}
