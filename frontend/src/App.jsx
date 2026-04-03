import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import About from "./About";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function NavContent() {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div className="nav-brand">Cửa Hàng Điện Thoại</div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Trang Chủ</Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>Giới Thiệu</Link>
      </div>
    </nav>
  );
}

function Home() {
  const [phones, setPhones] = useState([]);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    checkHealth();
    fetchPhones();
  }, []);

  const checkHealth = async () => {
    try {
      const res = await axios.get(`${API_URL}/health`);
      setStatus(res.data.status);
    } catch (error) {
      console.error("Error fetching health:", error);
      setStatus("offline");
    }
  };

  const fetchPhones = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/phones`);
      setPhones(res.data);
    } catch (error) {
      console.error("Error fetching phones:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!brand || !model || !price) return;
    try {
      await axios.post(`${API_URL}/api/phones`, { brand, model, price });
      setBrand("");
      setModel("");
      setPrice("");
      fetchPhones();
    } catch (error) {
      console.error("Error creating phone:", error);
    }
  };

  return (
    <div className="grid">
      <div className="card">
        <div className="card-header">Thông Tin Hệ Thống</div>
        <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <span style={{ marginRight: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Trạng thái API:</span>
          <span className={`status ${status === 'ok' ? 'ok' : 'error'}`}>
            {status === 'ok' ? 'Online' : 'Offline'}
          </span>
        </div>
        
        <div className="card-header">Thêm Sản Phẩm</div>
        <form onSubmit={handleSubmit} className="form-wrap">
          <input
            type="text"
            className="input-field"
            placeholder="Hãng sản xuất (VD: Apple)"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Dòng máy (VD: iPhone 15)"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <input
            type="number"
            className="input-field"
            placeholder="Giá bán (VNĐ)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit" className="btn-primary">
            Lưu Sản Phẩm
          </button>
        </form>
      </div>

      <div className="card">
        <div className="card-header">Danh Mục Điện Thoại</div>
        {phones.length === 0 ? (
          <p className="empty-state">Chưa có sản phẩm nào được lưu.</p>
        ) : (
          <ul className="data-list">
            {phones.map(p => (
              <li key={p._id} className="data-item">
                <div>
                  <div className="item-title">{p.model}</div>
                  <div className="item-subtitle">{p.brand}</div>
                </div>
                <div className="item-price">
                  {Number(p.price).toLocaleString('vi-VN')} đ
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="container">
        <NavContent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          &copy; {new Date().getFullYear()} DevOps Mini Project. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
