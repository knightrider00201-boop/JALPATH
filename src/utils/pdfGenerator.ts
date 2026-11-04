import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { TapRecord, WaterSupplyLog } from '../types';

export interface DossierPdfOptions {
  language: 'en' | 'hi';
  taps: TapRecord[];
  supplyLogs: WaterSupplyLog[];
  elementId?: string;
  onProgress?: (msg: string) => void;
}

/**
 * Downloads a crisp, professionally formatted multi-page PDF of the JALPATH AI Dossier.
 * Uses html2canvas for rich visual capture with automatic fallback to native jsPDF vector generation.
 */
export async function downloadDossierPdf(options: DossierPdfOptions): Promise<boolean> {
  const { language, taps, supplyLogs, elementId = 'dossier-printable-area', onProgress } = options;

  try {
    const element = document.getElementById(elementId);
    if (!element) {
      // If DOM element not found, fallback directly to native vector PDF
      onProgress?.(language === 'hi' ? 'PDF तैयार की जा रही है...' : 'Generating Vector PDF...');
      return generateNativeVectorPdf(options);
    }

    onProgress?.(language === 'hi' ? 'दस्तावेज़ स्कैन किया जा रहा है...' : 'Rendering high-resolution A4 canvas...');

    // Render using html2canvas with optimal options for clean text
    const canvas = await html2canvas(element, {
      scale: 2, // 2x resolution for crisp print quality
      useCORS: true,
      allowTaint: true,
      logging: false,
      backgroundColor: '#0A1326', // High contrast navy
      windowWidth: element.scrollWidth,
      onclone: (clonedDoc) => {
        // Ensure all text in the clone has strong contrast and no hidden overflow
        const clonedEl = clonedDoc.getElementById(elementId);
        if (clonedEl) {
          clonedEl.style.transform = 'none';
          clonedEl.style.borderRadius = '0';
          clonedEl.style.maxHeight = 'none';
          clonedEl.style.overflow = 'visible';
        }
      }
    });

    onProgress?.(language === 'hi' ? 'A4 पृष्ठ संयोजित किए जा रहे हैं...' : 'Compiling A4 multi-page document...');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = 210; // A4 mm
    const pageHeight = 297; // A4 mm
    const margin = 5; // 5mm margin
    const contentWidth = pageWidth - (margin * 2);
    const contentHeight = (canvas.height * contentWidth) / canvas.width;

    let heightLeft = contentHeight;
    let position = margin;
    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    // Page 1
    pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, contentHeight, undefined, 'FAST');
    heightLeft -= pageHeight;

    // Remaining pages
    while (heightLeft > 0) {
      position = heightLeft - contentHeight + margin;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, contentHeight, undefined, 'FAST');
      heightLeft -= pageHeight;
    }

    onProgress?.(language === 'hi' ? 'PDF डाउनलोड शुरू हो रहा है...' : 'Saving PDF file...');
    pdf.save(`JALPATH_AI_Dossier_UPG_MS_DUDHANI1_${new Date().toISOString().split('T')[0]}.pdf`);
    return true;
  } catch (err) {
    console.warn('Canvas PDF export failed, falling back to clean Vector PDF:', err);
    onProgress?.(language === 'hi' ? 'वैकल्पिक PDF जनरेटर का उपयोग...' : 'Switching to vector PDF engine...');
    return generateNativeVectorPdf(options);
  }
}

/**
 * Native vector PDF generator using jsPDF built-in drawing & text methods.
 * Guaranteed to run anywhere without DOM/canvas constraints.
 */
export function generateNativeVectorPdf(options: DossierPdfOptions): boolean {
  const { language, taps, supplyLogs, onProgress } = options;

  try {
    onProgress?.(language === 'hi' ? 'दस्तावेज़ तैयार किया जा रहा है...' : 'Building native PDF pages...');
    
    const doc = new jsPDF('p', 'mm', 'a4');
    let y = 18;
    const pageWidth = 210;
    const margin = 16;
    const maxWidth = pageWidth - (margin * 2);

    // Helpers
    const checkPageBreak = (neededHeight: number) => {
      if (y + neededHeight > 280) {
        doc.addPage();
        y = 20;
        drawHeaderFooter();
      }
    };

    const drawHeaderFooter = () => {
      doc.setFillColor(10, 19, 38);
      doc.rect(0, 0, pageWidth, 8, 'F');
      doc.setFontSize(8);
      doc.setTextColor(0, 229, 255);
      doc.text('QUEST4EARTH 2026 | JALPATH AI | UPG M.S. DUDHANI-1, JAMA, DUMKA', margin, 5.5);

      // Footer
      doc.setFontSize(8);
      doc.setTextColor(120, 144, 156);
      doc.text('Every Drop Has a Destination | UDAAN TEAM', margin, 292);
      const pageStr = `Page ${doc.internal.pages.length - 1}`;
      doc.text(pageStr, pageWidth - margin - 15, 292);
    };

    drawHeaderFooter();

    // Title Banner
    doc.setFillColor(13, 25, 51);
    doc.roundedRect(margin, y, maxWidth, 40, 3, 3, 'F');
    doc.setDrawColor(0, 229, 255);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, y, maxWidth, 40, 3, 3, 'S');

    doc.setFontSize(9);
    doc.setTextColor(0, 229, 255);
    doc.text('NATIONAL ENTRY: QUEST4EARTH 2026 | THEME: WATER CONSERVATION', margin + 6, y + 8);

    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text('JALPATH AI', margin + 6, y + 18);

    doc.setFontSize(10);
    doc.setTextColor(224, 242, 254);
    doc.setFont('helvetica', 'normal');
    doc.text('AI-Assisted School Water Rescue & Rainwater Intelligence System', margin + 6, y + 25);

    doc.setFontSize(9);
    doc.setTextColor(148, 163, 184);
    doc.text('Tagline: "Every Drop Has a Destination."', margin + 6, y + 32);

    y += 48;

    // School & Team Metadata Block
    checkPageBreak(35);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin, y, maxWidth, 30, 2, 2, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(margin, y, maxWidth, 30, 2, 2, 'S');

    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('School:', margin + 5, y + 7);
    doc.setFont('helvetica', 'normal');
    doc.text('UPG M.S. DUDHANI-1, Block Jama, District Dumka, Jharkhand, India', margin + 22, y + 7);

    doc.setFont('helvetica', 'bold');
    doc.text('Team:', margin + 5, y + 14);
    doc.setFont('helvetica', 'normal');
    doc.text('UDAAN TEAM (Student Members: Archana Kumari, Sima Baski)', margin + 22, y + 14);

    doc.setFont('helvetica', 'bold');
    doc.text('Mentor:', margin + 5, y + 21);
    doc.setFont('helvetica', 'normal');
    doc.text('Somnath Pal (Designation: ICT Instructor)', margin + 22, y + 21);

    y += 38;

    // 1. Verified Campus Baseline
    checkPageBreak(50);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(10, 19, 38);
    doc.text('1. Verified Campus Baseline Data', margin, y);
    y += 6;

    const stats = [
      { label: 'Total Enrolled Students', val: '160 (Not daily attendance)' },
      { label: 'Total Known People', val: '168 (160 students + 5 teachers + 1 ICT + 2 cooks)' },
      { label: 'Existing Overhead Tank', val: '~500 Litres (Minor leakage/damage; lasts ~1 day)' },
      { label: 'Observed Tap Status', val: '10 taps total (~3 to 4 leaking or non-functional)' },
      { label: '1000L Tank Incident', val: 'Separate borewell tank burst in 2 days (~1 yr ago); NOT rainwater' },
      { label: 'Backup Handpump', val: '<50m away; low yield; iron-tinted visual observation (untested)' }
    ];

    stats.forEach(item => {
      checkPageBreak(10);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text(`• ${item.label}:`, margin + 3, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(item.val, margin + 55, y);
      y += 6;
    });

    y += 6;

    // 2. Critical Failure Diagnosis
    checkPageBreak(50);
    doc.setFillColor(254, 242, 242);
    doc.roundedRect(margin, y, maxWidth, 38, 2, 2, 'F');
    doc.setDrawColor(239, 68, 68);
    doc.roundedRect(margin, y, maxWidth, 38, 2, 2, 'S');

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(185, 28, 28);
    doc.text('2. Confirmed Technical Failure: Roof-to-Inlet Disconnect', margin + 5, y + 7);

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(69, 10, 10);
    const diagText = [
      '• Core Ground Finding: Rainwater ponding persists on the RCC school roof for ~2 days after rain.',
      '• Inlet Entry: ZERO Litres reaches the PVC downpipe inlet lip due to reverse gradient and poor slope.',
      '• Clarification: This is NOT an assumed blocked pipe. Confirmed observation proves water never reaches the intake.',
      '• Vertical Downpipe & Recharge Chamber: As water fails to enter the inlet, the recharge chamber stays dry.',
      '• Safety Hazard: The ground recharge pit is open with loose gravel/soil and sack-tied pipe (NO protective lid).'
    ];
    diagText.forEach((t, idx) => {
      doc.text(t, margin + 5, y + 14 + (idx * 4.8));
    });

    y += 46;

    // 3. Complete Tap Audit Register
    checkPageBreak(65);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(10, 19, 38);
    doc.text('3. School Water Tap Audit Register (10 Taps)', margin, y);
    y += 6;

    // Table Header
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, maxWidth, 7, 'F');
    doc.setDrawColor(203, 213, 225);
    doc.rect(margin, y, maxWidth, 7, 'S');

    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text('ID', margin + 3, y + 4.8);
    doc.text('Location & Designation', margin + 18, y + 4.8);
    doc.text('Condition', margin + 85, y + 4.8);
    doc.text('Inspection Notes', margin + 120, y + 4.8);

    y += 7;

    taps.forEach((tap) => {
      checkPageBreak(7);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(2, 132, 199);
      doc.text(tap.id, margin + 3, y + 4.5);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(30, 41, 59);
      const name = tap.name.length > 32 ? tap.name.substring(0, 30) + '...' : tap.name;
      doc.text(name, margin + 18, y + 4.5);

      const statusColor = tap.condition === 'working' ? [22, 101, 52] : [194, 65, 12];
      doc.setTextColor(statusColor[0], statusColor[1], statusColor[2]);
      doc.setFont('helvetica', 'bold');
      doc.text(tap.condition.toUpperCase(), margin + 85, y + 4.5);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      const notes = tap.notes.length > 38 ? tap.notes.substring(0, 36) + '...' : tap.notes;
      doc.text(notes, margin + 120, y + 4.5);

      doc.setDrawColor(241, 245, 249);
      doc.line(margin, y + 6.5, margin + maxWidth, y + 6.5);
      y += 6.5;
    });

    y += 8;

    // 4. Hydrology & Action Plan
    checkPageBreak(50);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(10, 19, 38);
    doc.text('4. Hydrological Calculations & Action Plan', margin, y);
    y += 6;

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const actions = [
      '• Standard RWH Formula: Potential (Litres) = Roof Area (m²) × Annual Rainfall (mm) × Runoff Coeff. × Filter Efficiency',
      '• Civil Slope Regrading: Technical survey needed to lower PVC inlet intake and carve directional roof guide channels.',
      '• Child Safety Lid: Open pit at ground level requires an engineered RCC or heavy steel mesh cover immediately.',
      '• Tap Maintenance Overhaul: Systematic replacement of washers and valve cartridges across faulty taps.',
      '• Water Stewardship: Shift garden irrigation from uncontrolled hose to calibrated bucket/mug system.'
    ];
    actions.forEach((act) => {
      checkPageBreak(7);
      doc.text(act, margin + 3, y);
      y += 5.5;
    });

    y += 8;

    // Footer signature block
    checkPageBreak(25);
    doc.setDrawColor(203, 213, 225);
    doc.line(margin, y, margin + maxWidth, y);
    y += 6;

    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Prepared by UDAAN TEAM (Archana Kumari, Sima Baski | Mentor: Somnath Pal)', margin, y);
    doc.text('Official Prototype Entry for Quest4Earth 2026', pageWidth - margin - 65, y);

    onProgress?.(language === 'hi' ? 'PDF डाउनलोड शुरू हो रहा है...' : 'Saving PDF file...');
    doc.save(`JALPATH_AI_Dossier_UPG_MS_DUDHANI1_${new Date().toISOString().split('T')[0]}.pdf`);
    return true;
  } catch (error) {
    console.error('Error generating native vector PDF:', error);
    return false;
  }
}
