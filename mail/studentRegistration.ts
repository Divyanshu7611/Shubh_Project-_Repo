// export const registrationTemplate = (
//   userName: string,
//   rollNo: string,
//   eventName: string,
//   qrUrl: string
// ) => {
//   const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrUrl)}&size=200x200`;

//   return `
//     <div style="font-family: sans-serif; padding: 20px; text-align: center;">
//       <img 
//         src="https://res.cloudinary.com/dzk5x7rjz/image/upload/v1744756604/RTU_logo_me4bn1.png" 
//         alt="RTU Logo" 
//         style="width: 120px; margin-bottom: 10px;" 
//       />
//       <div style="font-size: 14px; margin-bottom: 20px; color: #555;">
//         Team Event Management System, RTU Kota
//       </div>

//       <h2 style="margin-bottom: 10px;">Event Management System RTU Kota – Registration Successful 🎉</h2>

//       <p>Hello <strong>${userName}</strong>,</p>
//       <p>You're successfully registered for the event <strong>${eventName}</strong>.</p>
//       <p><strong>Roll No:</strong> ${rollNo}</p>
//       <p>Please use the QR code below during event check-in:</p>

//       <div style="margin: 20px 0;">
//         <img 
//           src="${qrImageUrl}" 
//           alt="QR Code" 
//           style="width: 200px; height: 200px; border: 1px solid #ccc;" 
//         />
//       </div>

//       <p style="margin-top: 20px;">Thank you!</p>
//       <p style="margin-top: 5px; font-weight: bold;">— Team Event Management System, RTU Kota</p>
//        <p style="margin-top: 4px; font-weight: bold;">— For Any Query Reach 9950156755</p>
//     </div>
//   `;
// };






export const registrationTemplate = (
  userName: string,
  rollNo: string,
  qrUrl: string
) => {
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    qrUrl
  )}&size=200x200`;

  return `
    <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; text-align: center;">
      <div style="background: #ffffff; border-radius: 10px; max-width: 500px; margin: auto; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        
        <img 
          src="https://res.cloudinary.com/dzk5x7rjz/image/upload/v1744756604/RTU_logo_me4bn1.png" 
          alt="RTU Logo" 
          style="width: 100px; margin-bottom: 15px;" 
        />
        <h2 style="color: #2c3e50; margin-bottom: 5px;">Registration Successful</h2>
        <p style="color: #7f8c8d; margin-bottom: 20px;">Team Event Management System, RTU Kota</p>

        <p style="font-size: 16px; color: #2c3e50;">Hello <strong>${userName}</strong>,</p>

        <p style="font-size: 14px; color: #555;"><strong>Roll No:</strong> ${rollNo}</p>

        <p style="font-size: 14px; color: #2c3e50; margin-top: 20px;">Please present the QR code below at event check-in:</p>
        
        <div style="margin: 20px 0;">
          <img 
            src="${qrImageUrl}" 
            alt="QR Code" 
            style="width: 180px; height: 180px; border: 1px solid #ddd; border-radius: 8px;" 
          />
        </div>

        <div style="margin: 20px 0;">
          <a 
            href="https://chat.whatsapp.com/CeM1n0ZrxxH7owou3ywUmI?mode=ac_t" 
            style="
              display: inline-block; 
              padding: 12px 20px;             
              background-color: #25D366; 
              color: white; 
              text-decoration: none; 
              border-radius: 6px;
              font-size: 14px;
              font-weight: bold;
              margin-top: 10px;
            "
            target="_blank"
          >
            📱 Join WhatsApp Group
          </a>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;" />

        <p style="font-size: 13px; color: #888;">Thank you for registering!</p>
        <p style="font-size: 13px; font-weight: bold; color: #2c3e50;">— Team Event Management System, RTU Kota</p>
        <p style="font-size: 13px; font-weight: bold; color: #2c3e50;">For Any Query: 9950156755</p>
      </div>
    </div>
  `;
};
// <p style="font-size: 14px; color: #555;">You have successfully registered for <strong>${eventName}</strong>.</p>