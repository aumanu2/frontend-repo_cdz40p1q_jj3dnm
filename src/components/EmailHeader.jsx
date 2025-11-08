import React from 'react';

function formatDate() {
  try {
    const now = new Date();
    return now.toLocaleDateString('id-ID', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch {
    return '';
  }
}

const EmailHeader = () => {
  return (
    <div>
      {/* Top brand bar */}
      <div className="bg-red-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
              <span className="text-red-600 font-extrabold text-sm">KI</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">Kotak Informasi</span>
          </div>
          <span className="text-xs opacity-90 hidden sm:block">{formatDate()}</span>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-red-50 text-red-800 text-[12px] sm:text-xs px-6 py-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-medium">
          <span>Nasional</span>
          <span>Internasional</span>
          <span>Ekonomi</span>
          <span>Olahraga</span>
          <span>Teknologi</span>
          <span>Hiburan</span>
          <span>Gaya Hidup</span>
        </div>
      </div>
    </div>
  );
};

export default EmailHeader;
