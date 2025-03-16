// import PDFDocument from "pdfkit";
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

/**
 * Generates a certificate and uploads it to Cloudinary
 */
export const generateCertificate = async (studentName, courseTitle) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = `certificates/${studentName.replace(
      /\s+/g,
      "_"
    )}_${courseTitle.replace(/\s+/g, "_")}.pdf`;

    doc.fontSize(20).text("Certificate of Completion", { align: "center" });
    doc.moveDown();
    doc
      .fontSize(16)
      .text(`This certifies that ${studentName} has successfully completed`, {
        align: "center",
      });
    doc.fontSize(18).text(courseTitle, { align: "center", underline: true });
    doc.moveDown();
    doc.fontSize(14).text("Issued by EduCare", { align: "center" });
    doc.end();

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    stream.on("finish", async () => {
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: "educare_certificates",
        });
        fs.unlinkSync(filePath); // Delete local file
        resolve(result.secure_url);
      } catch (error) {
        reject(error);
      }
    });
  });
};
