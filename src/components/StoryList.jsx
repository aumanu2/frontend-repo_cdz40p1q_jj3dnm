import React from 'react';

const stories = [
  {
    title: 'Kebijakan Baru Pemerintah Soal Transportasi Publik',
    img: 'https://images.unsplash.com/photo-1501228280210-8293d05b0f47?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Harga Pangan Naik, Berikut Analisis Pakar',
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Timnas Raih Kemenangan Dramatis di Laga Persahabatan',
    img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Tren Teknologi AI yang Perlu Kamu Ketahui Tahun Ini',
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
  },
];

const StoryList = () => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" className="px-6">
      <tbody>
        <tr>
          <td>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stories.map((s, i) => (
                <a key={i} href="#" className="group block">
                  <div className="flex gap-4">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-28 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 group-hover:underline">
                        {s.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">2 jam lalu • Kotak Informasi</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StoryList;
