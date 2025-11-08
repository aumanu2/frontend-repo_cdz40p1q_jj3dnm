import React from 'react';

const EmailFooter = () => {
  return (
    <div className="px-6 py-8 bg-gray-50 text-gray-600">
      <div className="text-xs leading-5">
        <p className="font-semibold text-gray-800">Kotak Informasi</p>
        <p className="mt-1">Anda menerima email ini karena berlangganan buletin kami.</p>
        <p className="mt-1">Ingin berhenti berlangganan? <a href="#" className="text-red-600 hover:underline">Kelola preferensi</a></p>
        <p className="mt-4">© {new Date().getFullYear()} Kotak Informasi. Seluruh hak cipta.</p>
      </div>
    </div>
  );
};

export default EmailFooter;
