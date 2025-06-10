'use client';

import { useState } from 'react';
import UploadForm from './components/UploadForm';
import FileList from './components/FileList';
import PhotoCard from './components/PhotoCard';

export default function Home() {
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);

  return (
    <div className="container">
      <main>
        <PhotoCard />
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
          padding: 2rem 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
        
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        
        h1 {
          color: #fff;
          text-align: center;
          margin: 0;
          font-size: 2.5rem;
        }
        
        h2 {
          color: #666;
          text-align: center;
          margin: 0;
          font-size: 1.5rem;
          font-weight: normal;
        }
        
        .subtitle {
          text-align: center;
          color: #666;
          margin: 0;
          font-size: 1.1rem;
          max-width: 90%;
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          main {
            gap: 1.5rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.75rem;
          }

          main {
            gap: 1rem;
          }

          h1 {
            font-size: 1.75rem;
          }

          h2 {
            font-size: 1.1rem;
          }

          .subtitle {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
