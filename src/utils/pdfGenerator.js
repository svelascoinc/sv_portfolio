import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDF_OPTIONS } from './constants';

export const generatePDF = async (element, filename = 'CV_Samuel_Velasco.pdf') => {
  try {
    const canvas = await html2canvas(element, PDF_OPTIONS);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasWidth / canvasHeight;
    
    const imgWidth = pdfWidth;
    const imgHeight = imgWidth / ratio;
    
    // Margen de tolerancia para evitar páginas vacías (5mm de tolerancia)
    const tolerance = 5;
    
    // Verificar si todo el contenido cabe en una página con tolerancia
    if (imgHeight <= (pdfHeight + tolerance)) {
      // Todo cabe en una página - ajustar la altura si es necesario
      const finalHeight = Math.min(imgHeight, pdfHeight);
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, finalHeight);
    } else {
      // Se necesitan múltiples páginas
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > tolerance) { // Solo agregar página si queda contenido significativo
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
    }
    
    pdf.save(filename);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF');
  }
};