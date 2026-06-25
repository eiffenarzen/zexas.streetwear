import React from 'react';
import { X } from 'lucide-react';
import './SizeChartModal.css';

export default function SizeChartModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="size-chart-modal">
        <button className="close-modal-btn" onClick={onClose}>
          <X size={24} color="#fff" />
        </button>
        <h2 className="modal-title">SIZE CHART</h2>
        
        <div className="table-responsive">
          <table className="size-table">
            <thead>
              <tr>
                <th>SIZE</th>
                <th>LENGTH (CM)</th>
                <th>WIDTH (CM)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M</td>
                <td>70</td>
                <td>54</td>
              </tr>
              <tr>
                <td>L</td>
                <td>72</td>
                <td>56</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>74</td>
                <td>58</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>76</td>
                <td>60</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="size-note">* Tolerance +/- 1-2cm due to manual measurement.</p>
      </div>
    </>
  );
}
