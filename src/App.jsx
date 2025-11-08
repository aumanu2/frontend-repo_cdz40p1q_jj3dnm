import React from 'react';
import EmailHeader from './components/EmailHeader';
import LeadStory from './components/LeadStory';
import StoryList from './components/StoryList';
import EmailFooter from './components/EmailFooter';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100 py-6">
      <div className="max-w-3xl mx-auto bg-white shadow-sm ring-1 ring-black/5">
        {/* Header */}
        <EmailHeader />

        {/* Lead story */}
        <LeadStory />

        {/* Divider */}
        <div className="px-6">
          <div className="border-t border-gray-200" />
        </div>

        {/* Story list */}
        <StoryList />

        {/* Footer */}
        <EmailFooter />
      </div>

      {/* Email safe background */}
      <p className="text-center text-xs text-gray-500 mt-6">
        Pratinjau desain email bergaya portal berita untuk merek: Kotak Informasi
      </p>
    </div>
  );
}

export default App;
