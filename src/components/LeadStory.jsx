import React from 'react';

const LeadStory = () => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td className="p-6">
            <div className="bg-white">
              <a href="#" className="block">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                  alt="Lead Story"
                  className="w-full h-56 object-cover rounded"
                />
              </a>
              <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900">
                Headline Utama: Perkembangan Terbaru Hari Ini
              </h1>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                Ringkasan singkat yang menggoda pembaca untuk klik lebih lanjut. Tulis dengan
                gaya lugas dan informatif, tetap mudah dipindai pada format email.
              </p>
              <a
                href="#"
                className="inline-block mt-3 text-red-600 font-semibold hover:underline"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default LeadStory;
