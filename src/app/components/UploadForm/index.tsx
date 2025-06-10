// components/UploadForm.js
import { useState } from 'react';
import axios from 'axios';

export default function UploadForm({ onUploadSuccess }: any) {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files) as File[];
      setFiles(selectedFiles);
      setError(null);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (files.length === 0) {
      setError('Por favor, selecione pelo menos um arquivo' as any);
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('file', files[i]);

        const response = await axios.post('/api/upload', formData, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setUploadProgress(percentCompleted);
          },
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        onUploadSuccess(response.data);
      }
      setFiles([]);
    } catch (err) {
      setError('Erro ao enviar arquivo(s). Tente novamente.' as any);
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <div className="file-input-container">
        <label htmlFor="file-upload" className="file-label">
          {files.length > 0 
            ? `${files.length} arquivo(s) selecionado(s)` 
            : 'Selecione uma ou mais fotos'}
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          disabled={isUploading}
          multiple
        />
      </div>

      {isUploading && (
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${uploadProgress}%` }}
          ></div>
          <span>{uploadProgress}%</span>
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <button
        type="submit"
        disabled={isUploading || files.length === 0}
        className="upload-button"
      >
        {isUploading ? 'Enviando...' : 'Enviar Fotos'}
      </button>

      <style jsx>{`
        .upload-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .file-input-container {
          position: relative;
          overflow: hidden;
          display: inline-block;
          width: 100%;
        }
        
        .file-label {
          display: block;
          padding: 1rem;
          border: 2px dashed #ccc;
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .file-label:hover {
          border-color: #888;
        }
        
        input[type="file"] {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        
        .progress-bar {
          width: 100%;
          background-color: #f0f0f0;
          border-radius: 4px;
          padding: 3px;
          position: relative;
        }
        
        .progress-bar-fill {
          height: 20px;
          background-color: #4CAF50;
          border-radius: 2px;
          transition: width 0.3s;
        }
        
        .progress-bar span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-weight: bold;
        }
        
        .upload-button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s;
        }
        
        .upload-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
        
        .upload-button:hover:not(:disabled) {
          background-color: #45a049;
        }
        
        .error {
          color: #f44336;
          text-align: center;
          margin: 0.5rem 0;
        }
      `}</style>
    </form>
  );
}