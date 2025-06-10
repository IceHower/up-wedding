'use client';

import { useState } from 'react';
import UploadForm from './components/UploadForm';
import FileList from './components/FileList';

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  return (
    <div className="container">
      <main>
        <h1>Ana Paula e Victor</h1>
        <h2>Fotos do Casamento</h2>
        <p className="subtitle">Envie suas fotos para nosso álbum compartilhado</p>
        
        <UploadForm onUploadSuccess={(file: any) => 
          setUploadedFiles([...uploadedFiles, file])
        } />
        
        <FileList files={uploadedFiles} />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        h1 {
          color: #333;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        
        .subtitle {
          text-align: center;
          color: #666;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
}
