import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import InvoiceTemplate from '../InvoiceTemplate';
import "../../scss/style.css";

const InvoiceGenerator = ({ data }) => {
  const invoiceRef = useRef();

  // Generate PDF using the html2canvas and jsPDF libraries, this grabs all the html from the invoiceRef and converts it to a pdf
  const generatePDF = async () => {
    const canvas = await html2canvas(invoiceRef.current, { scale: 1 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'png', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice.pdf');
  };

  return (
    <div className='invoice-container'>
      <InvoiceTemplate ref={invoiceRef} data={data} />
      <button className="generateBtn" onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default InvoiceGenerator;